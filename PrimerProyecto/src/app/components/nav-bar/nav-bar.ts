import { CommonModule, } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { TemaService, Tema } from '../../services/tema';


@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, MatToolbarModule,MatIconModule,MatSlideToggleModule, FormsModule, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  
  pi:string="pi pi piiiiiiiiii";

  tema: Tema = 'normal';

  constructor(private temaService: TemaService) {}

  ngOnInit() {
    this.temaService.tema$.subscribe(t => this.tema = t);
  }

  cambiarTema(tema: Tema) {
    this.temaService.setTema(tema);
  }
}