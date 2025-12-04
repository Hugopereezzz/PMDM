import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, } from '@angular/core';

interface Building {
  name: string;
  cost: number;
  production: number; // Galletas por segundo que genera
  owned: number;
  icon: string;
}

@Component({
  selector: 'app-coockieclicker',
  imports: [CommonModule],
  templateUrl: './coockieclicker.html',
  styleUrl: './coockieclicker.css'
})
export class Coockieclicker implements OnInit, OnDestroy{

cookies: number = 0;
  intervalId: any;

  // Configuración de edificios iniciales
  buildings: Building[] = [
    { name: 'Cursor', cost: 15, production: 0.1, owned: 0, icon: '👆' },
    { name: 'Abuelita', cost: 100, production: 1, owned: 0, icon: '👵' },
    { name: 'Granja', cost: 1100, production: 8, owned: 0, icon: '🚜' },
    { name: 'Mina', cost: 12000, production: 47, owned: 0, icon: '⛏️' },
    { name: 'Fábrica', cost: 130000, production: 260, owned: 0, icon: '🏭' }
  ];

  ngOnInit() {
    // El "motor" del juego: se ejecuta 10 veces por segundo
    this.intervalId = setInterval(() => {
      this.produceAutoCookies();
    }, 100);
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  // 1. Acción de click manual
  clickCookie() {
    this.cookies++;
  }

  // 2. Comprar edificio
  buyBuilding(building: Building) {
    if (this.cookies >= building.cost) {
      this.cookies -= building.cost;
      building.owned++;
      
      // Fórmula clásica: El precio sube un 15% con cada compra
      building.cost = Math.ceil(building.cost * 1.15);
    }
  }

  // 3. Producción automática (Llamado por el intervalo)
  produceAutoCookies() {
    const cps = this.getCookiesPerSecond();
    // Dividimos por 10 porque el intervalo corre cada 100ms (0.1s)
    this.cookies += cps / 10;
  }

  // 4. Calcular Galletas Por Segundo (CPS) total
  getCookiesPerSecond(): number {
    return this.buildings.reduce((total, b) => total + (b.production * b.owned), 0);
  }
}
