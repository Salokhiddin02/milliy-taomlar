import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BizHaqimizda } from './biz-haqimizda';

describe('BizHaqimizda', () => {
  let component: BizHaqimizda;
  let fixture: ComponentFixture<BizHaqimizda>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BizHaqimizda]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BizHaqimizda);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
