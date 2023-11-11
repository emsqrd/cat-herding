import { LeaveRequest } from '../interfaces/leave-request';
import { LeaveType } from '../interfaces/leave-type';
import { LeaveTypeModel } from './leave-type.model';

export class LeaveRequestModel implements LeaveRequest{
  id: number;
  description: string;
  leaveType: LeaveType;
  leaveDate: Date;

  constructor() {
    this.id = 0;
    this.description = '';
    this.leaveType = new LeaveTypeModel();
    this.leaveDate = new Date();
  }
}
