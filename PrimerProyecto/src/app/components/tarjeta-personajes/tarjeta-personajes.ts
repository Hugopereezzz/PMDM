import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Personaje {
  nombre: string;
  raza: string;
  poder: number;
  imagen: string;
}

@Component({
  selector: 'app-tarjeta-personajes',
  imports: [CommonModule],
  templateUrl: './tarjeta-personajes.html',
  styleUrl: './tarjeta-personajes.css'
})
export class TarjetaPersonajes {

  @Input() personaje!: Personaje;

  estrellas(): number[] {
    return Array(this.personaje.poder).fill(0);
  }

  raza(): string {
    const r = (this.personaje.raza || '').toLowerCase();
    switch (r) {
      case 'humano': return 'raza-humano';
      case 'elfo':   return 'raza-elfo';
      case 'enano':  return 'raza-enano';
      case 'ogro':   return 'raza-ogro';
      case 'troll': return 'raza-troll';
      default:       return 'raza-default';
    }

  }
}
