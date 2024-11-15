import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  selectedEmpleado: Empleado;
  empleado: Empleado[];
  readonly URL_API = "https://backend-one-rose-12.vercel.app/api/empleados";

  constructor(private http:HttpClient) {
    this.selectedEmpleado = new Empleado();
    this.empleado=[];
   }
   //consultar
   getEmpleados(){
    return this.http.get(this.URL_API);
   }
   //agregar
   postEmpleado(Empleado:Empleado){
   return this.http.post(this.URL_API, Empleado);
   }
   //actualizar
   putEmpleado(Empleado:Empleado){
    return this.http.put(this.URL_API + `/${Empleado._id}`, Empleado);
   }
   //eliminar
   deleteEmpleado(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`,)
   }
    
      
}

