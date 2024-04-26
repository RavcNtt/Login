import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TaskService } from '../../task.service';
import { TareaPendiente } from '../../model/tarea-pendiente';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TareasComponent implements OnInit { 

  constructor(private taskService:TaskService){}

  public tareas: TareaPendiente[] = [];
  public nombreTarea = '';
  ngOnInit(): void {
    this.obtenerTareas();
  }
  title = 'login';

  deleteTask(i: number){
    this.tareas.splice(i, 1);
    this.taskService.saveTask(this.tareas)
  }

  cambiarEstado(){
    this.taskService.saveTask(this.tareas);
  }

  guardarTarea(){
    const nuevaTarea = new TareaPendiente(this.nombreTarea);
    this.tareas.push(nuevaTarea);
    this.taskService.saveTask(this.tareas);
    this.obtenerTareas();
    this.nombreTarea= ""
  }

  obtenerTareas(){
    this.tareas = this.taskService.getTask();
  }
}
