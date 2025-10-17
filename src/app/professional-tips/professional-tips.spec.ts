import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTips } from './professional-tips';

describe('ProfessionalTips', () => {
  let component: ProfessionalTips;
  let fixture: ComponentFixture<ProfessionalTips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalTips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalTips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



