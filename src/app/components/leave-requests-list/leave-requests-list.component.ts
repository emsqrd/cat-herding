import { Component, OnInit } from '@angular/core';
import { LeaveRequestsService } from '../../services/leave-requests.service';
import { Observable, tap } from 'rxjs';
import { LeaveRequestModel } from '../../models/leave-request.model';

@Component({
  selector: 'ch-leave-requests-list',
  templateUrl: './leave-requests-list.component.html',
  styleUrl: './leave-requests-list.component.scss',
})
export class LeaveRequestsListComponent {
  leaveRequests$: Observable<LeaveRequestModel[]>;

  public getLeaveDate(leaveDate: Date): string {
    return new Date(leaveDate).toLocaleDateString('en-US');
  }

  constructor(private leaveRequestService: LeaveRequestsService) {}

  getLeaveRequests(): void {
    this.leaveRequests$ = this.leaveRequestService.getLeaveRequests();
  }

  deleteLeaveRequest(id: number): void {
    this.leaveRequestService.deleteLeaveRequest(id).subscribe({
      next: () => this.getLeaveRequests(),
    });
  }

  ngOnInit() {
    this.getLeaveRequests();
  }
}
