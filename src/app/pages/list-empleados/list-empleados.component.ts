import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit{
  
  id: number;
  empleados: Empleado[];

  constructor(private empleadoService: EmpleadoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  updateEmpleado(id: number){
    this.router.navigate(['edit-empleado', id]);
  }

  deleteEmpleado(id: number){
    this.empleadoService.delete(id).subscribe( data => {
      console.log("Empleado eliminado");
      this.getEmpleados();
    })
  }
    
  

  private getEmpleados(){
    this.empleadoService.getAllEmpleados().subscribe( data => {
      this.empleados = data;
    })
  }

}
