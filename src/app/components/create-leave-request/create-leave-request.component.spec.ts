import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequestComponent } from './create-leave-request.component';
import { LeaveRequestsService } from '../../services/leave-requests.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { LeaveRequestFormComponent } from '../leave-request-form/leave-request-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('CreateRequestComponent', () => {
  let component: CreateRequestComponent;
  let fixture: ComponentFixture<CreateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule],
      providers: [LeaveRequestsService, Router, FormBuilder],
      declarations: [CreateRequestComponent, LeaveRequestFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
