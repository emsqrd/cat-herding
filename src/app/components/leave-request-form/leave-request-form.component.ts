import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LeaveType } from '../../interfaces/leave-type';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { LeaveRequest } from '../../interfaces/leave-request';
import { LeaveRequestModel } from '../../models/leave-request.model';
import { LeaveRequestsService } from '../../services/leave-requests.service';

@Component({
  selector: 'ch-leave-request-form',
  templateUrl: './leave-request-form.component.html',
  styleUrl: './leave-request-form.component.scss',
})
export class LeaveRequestFormComponent {
  @Input()
  initialState = new BehaviorSubject<LeaveRequest>(new LeaveRequestModel());

  @Output()
  formValuesChanged = new EventEmitter<LeaveRequest>();

  @Output()
  formSubmitted = new EventEmitter<LeaveRequest>();

  leaveRequestForm: FormGroup = new FormGroup({});
  leaveTypes: LeaveType[] = [];

  constructor(
    private fb: FormBuilder,
    private leaveRequestsService: LeaveRequestsService
  ) {}

  getLeaveTypes(): Observable<LeaveType[]> {
    return this.leaveRequestsService.getLeaveTypes();
  }

  submitForm(): void {
    this.formSubmitted.emit(this.leaveRequestForm.value);
  }

  ngOnInit() {
    this.getLeaveTypes().subscribe(
      (leaveTypes) => (this.leaveTypes = leaveTypes)
    );

    this.initialState.subscribe((leaveRequest) => {
      this.leaveRequestForm = this.fb.group({
        description: [leaveRequest.description],
        leaveType: [leaveRequest.leaveType],
        leaveDate: [leaveRequest.leaveDate],
      });
    });

    this.leaveRequestForm.valueChanges.subscribe((val) => {
      this.formValuesChanged.emit(val);
    });
  }
}
