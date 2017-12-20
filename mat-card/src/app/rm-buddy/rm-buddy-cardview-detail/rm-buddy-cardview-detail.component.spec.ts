import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmBuddyCardviewDetailComponent } from './rm-buddy-cardview-detail.component';

describe('RmBuddyCardviewDetailComponent', () => {
  let component: RmBuddyCardviewDetailComponent;
  let fixture: ComponentFixture<RmBuddyCardviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmBuddyCardviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmBuddyCardviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
