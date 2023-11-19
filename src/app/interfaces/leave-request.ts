import { LeaveType } from './leave-type';

export interface LeaveRequest {
  id: number;
  description: string;
  leaveType: string;
  leaveDate: Date;
}
