import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { LeaveType } from '../interfaces/leave-type';
import { MessageService } from './message.service';
import { LeaveRequestModel } from '../models/leave-request.model';
import { LeaveTypeModel } from '../models/leave-type.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestsService {

  private baseUrl: string = 'api';
  private leaveRequestsUrl: string = `${this.baseUrl}/leaveRequests`;
  private leaveTypesUrl: string = `${this.baseUrl}/leaveTypes`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  private log(message: string){
    console.log(message);
    this.messageService.add(`HeroService: ${message}`);
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }
  
  getLeaveTypes(): Observable<LeaveType[]> {
    let leaveTypes = this.http.get<LeaveType[]>(this.leaveTypesUrl)
      .pipe(
        tap(_ => this.log('fetched leave types')),
        catchError(this.handleError<LeaveTypeModel[]>('getLeaveTypes', []))
      );
    return leaveTypes;
  }

  getLeaveRequests(): Observable<LeaveRequestModel[]> {
    let leaveRequests = this.http.get<LeaveRequestModel[]>(this.leaveRequestsUrl)
      .pipe(
        tap(_ => this.log('fetched leave requests')),
        catchError(this.handleError<LeaveRequestModel[]>('getLeaveRequests', []))
      );
    return leaveRequests;
  }

  createLeaveRequest(leaveRequest: LeaveRequestModel): Observable<LeaveRequestModel> {
    let createdLeaveRequest = this.http.post<LeaveRequestModel>(this.leaveRequestsUrl, leaveRequest, this.httpOptions)
      .pipe(
        tap((newLeaveRequest: LeaveRequestModel) => this.log(`added new leave request w/ id: ${newLeaveRequest.id}`)),
        catchError(this.handleError<LeaveRequestModel>('createLeaveRequest'))
      )
    return createdLeaveRequest;
  }
}
