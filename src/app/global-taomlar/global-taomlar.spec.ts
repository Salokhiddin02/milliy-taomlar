import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalTaomlarComponent } from './global-taomlar';

describe('GlobalTaomlarComponent', () => {
  let component: GlobalTaomlarComponent;
  let fixture: ComponentFixture<GlobalTaomlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalTaomlarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalTaomlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
















