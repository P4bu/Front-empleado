import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-update-empleado',
  templateUrl: './update-empleado.component.html',
  styleUrls: ['./update-empleado.component.css']
})
export class UpdateEmpleadoComponent {

  id:number;  
  empleado: Empleado = new Empleado();
  
  constructor(private empleadoService: EmpleadoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.getEmpleadoById(this.id).subscribe(data => {
      this.empleado = data;
    },error => console.log(error))

  }
  goToEmpleadoList(){
    this.router.navigate(['/empleados']);
    swal('Empleado Actualizado', `Empleado ${this.empleado.nombre} actualizado con exito!`, 'success');
  }

  onSubmit(){
    this.empleadoService.updateEmpleado(this.empleado.id, this.empleado).subscribe( data => {
      this.goToEmpleadoList();
    })
  }
}
function swal(arg0: string, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');
}

