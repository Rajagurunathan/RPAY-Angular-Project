import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtelplanComponent } from './airtelplan.component';

describe('AirtelplanComponent', () => {
  let component: AirtelplanComponent;
  let fixture: ComponentFixture<AirtelplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirtelplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtelplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
