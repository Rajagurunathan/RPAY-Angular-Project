import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsnlplanComponent } from './bsnlplan.component';

describe('BsnlplanComponent', () => {
  let component: BsnlplanComponent;
  let fixture: ComponentFixture<BsnlplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsnlplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsnlplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
