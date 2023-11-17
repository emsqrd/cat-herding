import { Component } from '@angular/core';
import { LeaveRequestsService } from '../../services/leave-requests.service';
import { LeaveRequest } from '../../interfaces/leave-request';
import { Router } from '@angular/router';

@Component({
  selector: 'ch-create-leave-request',
  templateUrl: './create-leave-request.component.html',
  styleUrl: './create-leave-request.component.scss',
})
export class CreateRequestComponent {
  constructor(
    private leaveRequestsService: LeaveRequestsService,
    private router: Router
  ) {}

  createLeaveRequest(leaveRequest: LeaveRequest) {
    this.leaveRequestsService.createLeaveRequest(leaveRequest).subscribe({
      next: () => {
        this.router.navigate(['/list']);
      },
    });
  }
}
