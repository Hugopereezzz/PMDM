import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Consola } from '../../services/consola';

@Component({
  selector: 'app-matatopos',
  imports: [NgIf],
  templateUrl: './matatopos.html',
  styleUrl: './matatopos.css'
})
export class Matatopos {

  constructor(private consola:Consola){

  }

  numero:number = Math.floor(Math.random()*9) + 1;
  puntos:number = 0;

  cambio(){
    let nuevoNumero: number;

  do {
    nuevoNumero = Math.floor(Math.random() * 9) + 1;
  } while (nuevoNumero === this.numero);

  this.numero = nuevoNumero;
  }

  clickEnBoton(esRojo:boolean){
    if (esRojo){
      this.puntos++;
      this.consola.incrementarToposMuertos();
      this.consola.mostrarEnConsola("has matado un topillo, llevas " + this.consola.getToposMuertos());
    } else{
      this.puntos--;
    }
    this.cambio();

  }

}
