import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpleadoComponent } from './update-empleado.component';

describe('UpdateEmpleadoComponent', () => {
  let component: UpdateEmpleadoComponent;
  let fixture: ComponentFixture<UpdateEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmpleadoComponent]
    });
    fixture = TestBed.createComponent(UpdateEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
