import { LeaveType } from '../interfaces/leave-type';

export class LeaveTypeModel implements LeaveType {
  id: number;
  name: string;

  constructor () {
    this.id = 0;
    this.name = '';
  }
}
