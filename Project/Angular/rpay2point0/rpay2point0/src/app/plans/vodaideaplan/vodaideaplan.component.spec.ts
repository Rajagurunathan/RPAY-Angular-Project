import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VodaideaplanComponent } from './vodaideaplan.component';

describe('VodaideaplanComponent', () => {
  let component: VodaideaplanComponent;
  let fixture: ComponentFixture<VodaideaplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VodaideaplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VodaideaplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
