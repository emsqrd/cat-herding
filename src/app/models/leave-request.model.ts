import { LeaveRequest } from '../interfaces/leave-request';
import { LeaveType } from '../interfaces/leave-type';
import { LeaveTypeModel } from './leave-type.model';

export class LeaveRequestModel implements LeaveRequest{
  id: number;
  description: string;
  leaveType: string;
  leaveDate: Date;

  constructor() {
    this.id = 0;
    this.description = '';
    this.leaveType = '';
    this.leaveDate = new Date();
  }
}
