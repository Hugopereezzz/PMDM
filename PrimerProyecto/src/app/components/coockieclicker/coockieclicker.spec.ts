import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coockieclicker } from './coockieclicker';

describe('Coockieclicker', () => {
  let component: Coockieclicker;
  let fixture: ComponentFixture<Coockieclicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coockieclicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coockieclicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
