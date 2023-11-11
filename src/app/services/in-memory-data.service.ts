import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { LeaveRequest } from '../models/leave-request';
import { LeaveType } from '../models/leave-type';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {

    const leaveRequests = [
      {
        id: 1,
        description: "Vacation",
        type: 1,
        leaveDate: "11/12/2023"
      },
      {
        id: 2,
        description: "Cancun",
        type: 2,
        leaveDate: "11/2/2023"
      },
    ];

    const leaveTypes = [
      { id: 1, name: "Vacation" },
      { id: 2, name: "Sick" },
      { id: 3, name: "Volunteer" },
      { id: 4, name: "Appointment" },
    ];

    return { leaveRequests, leaveTypes };
  }

  genId<T extends LeaveRequest | LeaveType>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }

}
