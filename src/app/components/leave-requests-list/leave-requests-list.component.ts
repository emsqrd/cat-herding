import { Component } from '@angular/core';
import { LeaveRequestsService } from '../../services/leave-requests.service';
import { LeaveRequest } from '../../models/leave-request';

@Component({
  selector: 'ch-leave-requests-list',
  templateUrl: './leave-requests-list.component.html',
  styleUrl: './leave-requests-list.component.scss'
})

export class LeaveRequestsListComponent {

  leaveRequests: LeaveRequest[] = [];

  constructor(
    private leaveRequestService: LeaveRequestsService,
  ) { }

  
  ngOnInit() {
    this.leaveRequests = this.leaveRequestService.getLeaveRequests();
  }


}
