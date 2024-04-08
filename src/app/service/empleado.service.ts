import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url = 'http://localhost:8080/api/empleados';

  constructor(private http: HttpClient ) { }

  //metodo para obtener todos los empleados
  getAllEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(`${this.url}`);
  }

  //metodo para crear un empleado
  createEmpleado(empleado:Empleado): Observable<Object>{
    return this.http.post(`${this.url}/save`, empleado);
  };

  //metodo para actualizar un empleado
  updateEmpleado(id: number, empleado: Empleado): Observable<Object>{
    return this.http.patch<Empleado>(`${this.url}/${id}`, empleado);
  }

  //metodo para optener un empleado por id
  getEmpleadoById(id: number): Observable<Empleado>{
    return this.http.get<Empleado>(`${this.url}/${id}`);
  }

  //metodo para eliminar un empleado
  delete(id: number): Observable<Object> {
    return this.http.delete<Empleado>(`${this.url}/delete/${id}`);
  }

}
