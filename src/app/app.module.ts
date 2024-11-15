import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
