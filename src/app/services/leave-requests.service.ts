import { Injectable } from '@angular/core';
import { LeaveRequest } from '../models/leave-request';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestsService {

  leaveRequests: LeaveRequest[] = [
  ]

  constructor() { }

  getLeaveRequests(): LeaveRequest[] {
    return this.leaveRequests;
  }
}
