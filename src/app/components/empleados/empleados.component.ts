import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Empleado } from '../../models/empleado';

declare var M:any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers:[EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
  empleados:Empleado[]=[];
  constructor(public empleadoService:EmpleadoService, private router:Router){}
  ngOnInit(): void {
    this.getEmpleados(); // Cargar lista de empleados al iniciar
  }

  getEmpleados() {
    this.empleadoService.getEmpleados()
      .subscribe(res => {
        this.empleados = res as Empleado[];
      });
  }
  //agregar empleado
  agregarEmpleado(form?: NgForm) {
    this.empleadoService.postEmpleado(form?.value)
    .subscribe(res => {
    this.resetForm(form);
    M.toast({html: "Empleado guardado correctamente"});
    //this.getEmpleados();//actualizar lista de empleados despues de agregar
    });
    }

    
    
    resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro
    if (form) {
    form.reset();
    this.empleadoService.selectedEmpleado = new Empleado();
    }
  }
  
    //seleccionar empleado para editar
    seleccionarEmpleado(empleado: Empleado): void {
      this.empleadoService.selectedEmpleado = Object.assign({}, empleado);
    }
  }

