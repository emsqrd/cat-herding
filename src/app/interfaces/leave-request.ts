import { LeaveType } from './leave-type';

export interface LeaveRequest {
  id: number;
  description: string;
  leaveType: LeaveType;
  leaveDate: Date;
}
