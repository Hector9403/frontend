import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadoService } from '../services/empleado.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


declare var M: any;

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit{
  empleados:Empleado[]=[];
  constructor(private empleadoService:EmpleadoService, private router:Router){}

  ngOnInit(): void {
    this.getEmpleados();// cargar lista de empleados al iniciar
  }

  //obtener lista de empleados
  getEmpleados(){
    this.empleadoService.getEmpleados()
    .subscribe(res => {
      this.empleados = res as Empleado[];
      console.log(res);
    });
  }

  
  //eliminar empleado
  eliminarEmpleado(id:string){
    if(confirm('¿Estás seguro de querer eliminar este empleado?')){
    this.empleadoService.deleteEmpleado(id)
    .subscribe(res => {
      M.toast({html: 'Empleado eliminado correctamente'});
      this.getEmpleados();//actualizar lista de empleados despues de eliminar
    })};
  }
  
  //editar empleado
  editarEmpleado(form: NgForm) {
    if(form.value._id) {
     this.empleadoService.putEmpleado(form.value)
        .subscribe(res => {
          form.reset();
          M.toast({html: 'Empleado actualizado correctamente'});
          this.getEmpleados();
      });
  }
}
  // Método para seleccionar un empleado para editar (navegar a la página de edición)
  seleccionarEmpleado(empleado: Empleado) {
    this.empleadoService.selectedEmpleado = Object.assign({}, empleado);
  }
}