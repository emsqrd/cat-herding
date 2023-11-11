import { Component } from '@angular/core';
import { LeaveRequestsService } from '../../services/leave-requests.service';
import { LeaveRequest } from '../../models/leave-request';
import { LeaveType } from '../../models/leave-type';
import { Observable } from 'rxjs';

@Component({
  selector: 'ch-leave-requests-list',
  templateUrl: './leave-requests-list.component.html',
  styleUrl: './leave-requests-list.component.scss'
})

export class LeaveRequestsListComponent {

  leaveRequests$: Observable<LeaveRequest[]> = new Observable();
  leaveTypes: LeaveType[] = [];

  constructor(
    private leaveRequestService: LeaveRequestsService,
  ) { }

  ngOnInit() {
    this.leaveRequests$ = this.leaveRequestService.getLeaveRequests();
  }


}
