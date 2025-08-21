import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsonapi } from './jsonapi';

describe('Jsonapi', () => {
  let component: Jsonapi;
  let fixture: ComponentFixture<Jsonapi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jsonapi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jsonapi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
