import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pinturas } from './pinturas';

describe('Pinturas', () => {
  let component: Pinturas;
  let fixture: ComponentFixture<Pinturas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pinturas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pinturas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
