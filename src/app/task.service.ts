import { Injectable } from '@angular/core';
import { TareaPendiente } from './model/tarea-pendiente';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  CLAVE = "tareaAngular"

  constructor() { }

  getTask(): TareaPendiente[]{
    return JSON.parse(localStorage.getItem(this.CLAVE) || "[]")
  }

  saveTask(task: TareaPendiente[]){
    localStorage.setItem(this.CLAVE, JSON.stringify(task))
  }

}
