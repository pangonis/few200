import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { STATUSComponent } from './status.component';

describe('STATUSComponent', () => {
  let component: STATUSComponent;
  let fixture: ComponentFixture<STATUSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ STATUSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(STATUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
