import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';

const routes: Routes = [
  { path: '', component: EmpleadosComponent },
  { path: 'lista-empleados', component: ListaEmpleadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
