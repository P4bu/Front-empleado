import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmpleadosComponent } from './pages/list-empleados/list-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmpleadoComponent } from './pages/create-empleado/create-empleado.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmpleadoComponent } from './pages/update-empleado/update-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    CreateEmpleadoComponent,
    UpdateEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
