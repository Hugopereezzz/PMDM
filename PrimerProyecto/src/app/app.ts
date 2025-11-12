import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Matatopos } from './components/matatopos/matatopos';
import { CommonModule, NgIf } from '@angular/common';
import { NavBar } from './components/nav-bar/nav-bar';
import { Carrera } from './components/carrera/carrera';
import { ListaPersonajes } from './components/lista-personajes/lista-personajes';
import { TarjetaPersonajes } from './components/tarjeta-personajes/tarjeta-personajes';
import { Formulario } from './components/formulario/formulario';
import { KanbanBoard } from './components/kanban-board/kanban-board';
import { TemaService, Tema } from './services/tema';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Matatopos, NgIf, NavBar, Carrera, ListaPersonajes, TarjetaPersonajes, Formulario, KanbanBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tema: Tema = 'normal';

  constructor(private temaService: TemaService) {}

  ngOnInit() {
    this.temaService.tema$.subscribe(t => this.tema = t);
  }

  cambiarTema(tema: Tema) {
    this.temaService.setTema(tema);
  }

  
}
