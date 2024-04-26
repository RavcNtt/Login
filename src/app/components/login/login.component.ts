import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  
  usuario: UserModel = new UserModel;
  router = inject(Router);
  constructor(private auth: AuthService){}

  ngOnInit(): void {
    this.usuario = new UserModel();
    this.usuario.userInput = 'algo'
  } 

  onSubmit(form: NgForm){

    if(form.invalid) {return; }

    const temp = this.auth.login(this.usuario)
    this.cambiarRuta()
  }

  cambiarRuta(){
    this.router.navigateByUrl('/tareas');
  }

}
