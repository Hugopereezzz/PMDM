import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPersonajes } from './tarjeta-personajes';

describe('TarjetaPersonajes', () => {
  let component: TarjetaPersonajes;
  let fixture: ComponentFixture<TarjetaPersonajes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPersonajes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPersonajes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
