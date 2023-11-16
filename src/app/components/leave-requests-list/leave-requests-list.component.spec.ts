import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRequestsListComponent } from './leave-requests-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('LeaveRequestsListComponent', () => {
  let component: LeaveRequestsListComponent;
  let fixture: ComponentFixture<LeaveRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [LeaveRequestsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
