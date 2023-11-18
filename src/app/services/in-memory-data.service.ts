import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../interfaces/leave-request';
import { LeaveType } from '../interfaces/leave-type';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(
    reqInfo?: RequestInfo | undefined
  ): {} | Observable<{}> | Promise<{}> {
    const leaveTypes = [
      { id: 1, name: 'Vacation' },
      { id: 2, name: 'Sick' },
      { id: 3, name: 'Volunteer' },
      { id: 4, name: 'Appointment' },
    ];

    const leaveRequests = [
      {
        id: 1,
        description: 'Going to Chicago',
        leaveType: 'Vacation',
        leaveDate: '2023-11-12',
      },
      {
        id: 2,
        description: 'Not feeling good',
        leaveType: 'Sick',
        leaveDate: '2023-11-01',
      },
    ];

    return { leaveRequests, leaveTypes };
  }

  genId<T extends LeaveRequest | LeaveType>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map((t) => t.id!)) + 1 : 1;
  }
}
