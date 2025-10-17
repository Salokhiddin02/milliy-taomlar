import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aloqa } from './aloqa';

describe('Aloqa', () => {
  let component: Aloqa;
  let fixture: ComponentFixture<Aloqa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aloqa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aloqa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
