import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iluminacion } from './iluminacion';

describe('Iluminacion', () => {
  let component: Iluminacion;
  let fixture: ComponentFixture<Iluminacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Iluminacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Iluminacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
