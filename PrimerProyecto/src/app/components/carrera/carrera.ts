import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrera',
  imports: [CommonModule],
  templateUrl: './carrera.html',
  styleUrl: './carrera.css'
})
export class Carrera implements OnInit {

  chibis = ['chibi1', 'chibi2', 'chibi3', 'chibi4', 'chibi5'];

  ngOnInit() {
    this.chibis.forEach((chibi, index) => this.addRandomAnimation(chibi, index));
  }


  randomPx(): number {
    return Math.floor(Math.random() * 1001) - 850; 
  }


  addRandomAnimation(chibiClass: string, index: number) {
    const pos1 = this.randomPx();
    const pos2 = this.randomPx();
    const pos3 = this.randomPx();

    const keyframes = `
      @keyframes animacion${index} {
        0% { transform: translateX(0px) scaleX(1); }
        25% { transform: translateX(${pos1}px) scaleX(1); }
        50% { transform: translateX(${pos2}px) scaleX(1); }
        75% { transform: translateX(${pos3}px) scaleX(1); }
        100% { transform: translateX(0px) scaleX(1); }
      }
    `;


    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);


    const element = document.querySelector(`.${chibiClass}`) as HTMLElement;
    if (element) {
      element.style.animation = `animacion${index} 5s infinite alternate`;
    }
  }
}

