import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Consola } from '../../services/consola';

@Component({
  selector: 'app-contador',
  imports: [NgIf],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  constructor(private consola: Consola){

  }

  numero:number = 0;

  incrementar(){
    if(this.numero<2){
      this.numero++;
    }else{
      this.numero=0;
      this.consola.mostrarEnConsola("El contador se ha reseteado");
    }

  }

}
