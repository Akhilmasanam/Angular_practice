import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homee } from './homee';

describe('Homee', () => {
  let component: Homee;
  let fixture: ComponentFixture<Homee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
