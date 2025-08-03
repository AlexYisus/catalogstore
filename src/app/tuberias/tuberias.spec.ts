import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuberias } from './tuberias';

describe('Tuberias', () => {
  let component: Tuberias;
  let fixture: ComponentFixture<Tuberias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tuberias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tuberias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
