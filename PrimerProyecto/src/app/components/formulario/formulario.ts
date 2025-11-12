import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, NgIf],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  formulario: FormGroup;
  mensajeExito: string | null = null;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      disfraz: ['', [Validators.required]],
      fechaLlegada: ['', Validators.required],
      aceptaReglas: [false, Validators.requiredTrue]
    });

  }

  onSubmit() {
    if (this.formulario.valid) {
      const { nombre } = this.formulario.value;
      this.mensajeExito = `🎃 ¡Bienvenido/a, ${nombre}! Tu entrada para la fiesta del castillo ha sido registrada con éxito.`;
    }
  }

  mostrar(){
      if(this.formulario.invalid){
        console.log("El formulario contiene errores.");
      }else {
        console.log(this.formulario.value);
      }
  }

  resetear(){
    this.formulario.reset({
      nombre: '',
      email: ''
    });
  }
}


