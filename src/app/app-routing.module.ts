import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './pages/list-empleados/list-empleados.component';
import { CreateEmpleadoComponent } from './pages/create-empleado/create-empleado.component';
import { UpdateEmpleadoComponent } from './pages/update-empleado/update-empleado.component';

const routes: Routes = [
  {
    path: 'empleados',
    component: ListEmpleadosComponent
  },
  {
    path: '',
    redirectTo: '/empleados',
    pathMatch: 'full'
  },
  {
    path: 'create-empleado',
    component: CreateEmpleadoComponent
  },
  {
    path: 'edit-empleado/:id',
    component: UpdateEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
