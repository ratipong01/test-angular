import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmBuddyCardviewComponent } from './rm-buddy-cardview.component';

describe('RmBuddyCardviewComponent', () => {
  let component: RmBuddyCardviewComponent;
  let fixture: ComponentFixture<RmBuddyCardviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmBuddyCardviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmBuddyCardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
