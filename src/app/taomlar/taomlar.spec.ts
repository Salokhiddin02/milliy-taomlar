import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taomlar } from './taomlar';

describe('Taomlar', () => {
  let component: Taomlar;
  let fixture: ComponentFixture<Taomlar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taomlar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taomlar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
