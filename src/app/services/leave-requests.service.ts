import { Injectable } from '@angular/core';
import { LeaveRequest } from '../models/leave-request';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveType } from '../models/leave-type';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestsService {

  private url: string = '../data';

  constructor(
    private http: HttpClient,
  ) { }

  getLeaveTypes(): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(`${this.url}/leave-types.json`);
  }

  getLeaveRequests(): Observable<LeaveRequest[]> {
    return this.http.get<LeaveRequest[]>(`${this.url}/leave-requests.json`);
  }
}
