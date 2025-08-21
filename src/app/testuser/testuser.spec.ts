import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testuser } from './testuser';

describe('Testuser', () => {
  let component: Testuser;
  let fixture: ComponentFixture<Testuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testuser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
