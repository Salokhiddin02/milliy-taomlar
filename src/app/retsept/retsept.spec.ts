import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Retsept } from './retsept';

describe('Retsept', () => {
  let component: Retsept;
  let fixture: ComponentFixture<Retsept>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Retsept]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Retsept);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
