import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Tema = 'normal' | 'halloween' | 'navidad';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private temaSubject = new BehaviorSubject<Tema>('normal');
  tema$ = this.temaSubject.asObservable();

  constructor() {
    const guardado = localStorage.getItem('tema') as Tema | null;
    if (guardado) {
      this.setTema(guardado);
    } else {
      this.setTema('normal');
    }
  }

  setTema(tema: Tema) {
    this.temaSubject.next(tema);

    document.body.className = '';
    document.body.classList.add(`tema-${tema}`);

    localStorage.setItem('tema', tema);
  }

  get temaActual(): Tema {
    return this.temaSubject.value;
  }
}
