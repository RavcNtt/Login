export class TareaPendiente {
  nombreTarea: string
  estado: boolean
  constructor(nombreTarea:string, estado?:boolean){
    this.estado = estado ? estado: false;
    this.nombreTarea = nombreTarea;
  }
}