import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMsgComponent } from './display-msg.component';

describe('DisplayMsgComponent', () => {
  let component: DisplayMsgComponent;
  let fixture: ComponentFixture<DisplayMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
