import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveType } from '../../interfaces/leave-type';
import { LeaveRequestsService } from '../../services/leave-requests.service';
import { LeaveRequest } from '../../interfaces/leave-request';
import { LeaveRequestModel } from '../../models/leave-request.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ch-create-leave-request',
  templateUrl: './create-leave-request.component.html',
  styleUrl: './create-leave-request.component.scss'
})

export class CreateRequestComponent { 

  leaveRequestForm: FormGroup = new FormGroup({});
  leaveTypes: LeaveType[] = [];
  
  initialState: BehaviorSubject<LeaveRequest> = new BehaviorSubject(new LeaveRequestModel());

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private leaveRequestsService: LeaveRequestsService) { }
  
  getSubmitTypes(): void {
    this.leaveRequestsService.getLeaveTypes()
      .subscribe(leaveTypes => this.leaveTypes = leaveTypes);
  }

  onSubmit(): void {
    this.leaveRequestsService.createLeaveRequest(this.leaveRequestForm.value)
      .subscribe({
        next: () => {
          console.log(this.leaveRequestForm.value);
          this.router.navigate(['/leave-request-list']);
        }
      });
  }

  ngOnInit() {
    this.getSubmitTypes();
    
    this.initialState.subscribe(leaveRequest => {
      this.leaveRequestForm = this.fb.group({
        description: [leaveRequest.description],
        leaveType: [leaveRequest.leaveType],
        leaveDate: [leaveRequest.leaveDate],
      });
    })
  
  }

}
