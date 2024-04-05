import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-create-empleado',
  templateUrl: './create-empleado.component.html',
  styleUrls: ['./create-empleado.component.css']
})
export class CreateEmpleadoComponent implements OnInit{
  
  empleado: Empleado = new Empleado();
  
  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {

  }

  saveEmpleado(){
    this.empleadoService.createEmpleado(this.empleado).subscribe( data => {
      console.log(data);
      this.goToEmpleadoList();
    },error => console.log(error));
  }

  goToEmpleadoList(){
    this.router.navigate(['/empleados']);
  }

  onSubmit(){
    this.saveEmpleado();
  }
}
