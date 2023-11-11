import { Injectable } from '@angular/core';
import { LeaveRequest } from '../models/leave-request';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestsService {

  leaveRequests: LeaveRequest[] = [
    {
      id: 1,
      description: 'Vacation',
      type: 1,
      leaveDate: new Date('11/12/2023'),
    }
  ]

  constructor() { }

  getLeaveRequests(): LeaveRequest[] {
    return this.leaveRequests;
  }
}
