import { Injectable } from '@angular/core';
import { UserModel } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  
  public permiso = false;
  private admin: UserModel = {
    userInput:'input01',
    passInput:'input01'
  }

  isAuth(): boolean{
    return this.permiso;
  }

  login(user: UserModel): boolean{
    if (user.userInput == this.admin.userInput && user.passInput == this.admin.passInput ) {
      this.permiso = true;
    } else {
      this.permiso = false;
    }
    return this.permiso;
  }
}
