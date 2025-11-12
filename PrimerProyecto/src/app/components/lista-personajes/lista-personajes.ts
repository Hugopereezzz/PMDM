import { Component } from '@angular/core';
import { TarjetaPersonajes } from '../tarjeta-personajes/tarjeta-personajes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-personajes',
  imports: [TarjetaPersonajes, NgFor],
  templateUrl: './lista-personajes.html',
  styleUrl: './lista-personajes.css'
})
export class ListaPersonajes {

    personajes = [
    { nombre: 'Maria', raza: 'Elfo', poder: 4, imagen: '/images/elfo.png' },
    { nombre: 'Hugo', raza: 'Humano', poder: 5, imagen: '/images/humano.png' },
    { nombre: 'Gebolo', raza: 'Ogro', poder: 2, imagen: '/images/ogro.png' },
    { nombre: 'Guille', raza: 'Troll', poder: 1, imagen: '/images/troll.png' },
    { nombre: 'Michu', raza: 'Enano', poder: 3, imagen: '/images/enano.png' },
    
  ];
}
