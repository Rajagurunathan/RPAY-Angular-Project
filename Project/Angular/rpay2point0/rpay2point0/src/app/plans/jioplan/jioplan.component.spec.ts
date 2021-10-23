import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JioplanComponent } from './jioplan.component';

describe('JioplanComponent', () => {
  let component: JioplanComponent;
  let fixture: ComponentFixture<JioplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JioplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JioplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
