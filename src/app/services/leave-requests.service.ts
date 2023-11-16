import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { LeaveType } from '../interfaces/leave-type';
import { MessageService } from './message.service';
import { LeaveRequestModel } from '../models/leave-request.model';
import { LeaveTypeModel } from '../models/leave-type.model';
import { LeaveRequest } from '../interfaces/leave-request';

@Injectable({
  providedIn: 'root',
})
export class LeaveRequestsService {
  private baseUrl: string = 'api';
  private leaveRequestsUrl: string = `${this.baseUrl}/leaveRequests`;
  private leaveTypesUrl: string = `${this.baseUrl}/leaveTypes`;

  private log(message: string) {
    console.log(message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.log(error);

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) {}

  getLeaveTypes(): Observable<LeaveType[]> {
    let leaveTypes = this.http.get<LeaveType[]>(this.leaveTypesUrl).pipe(
      tap((_) => this.log('fetched leave types')),
      catchError(this.handleError<LeaveTypeModel[]>('getLeaveTypes', []))
    );
    return leaveTypes;
  }

  getLeaveRequests(): Observable<LeaveRequestModel[]> {
    let leaveRequests = this.http
      .get<LeaveRequestModel[]>(this.leaveRequestsUrl)
      .pipe(
        tap((_) => this.log('fetched leave requests')),
        catchError(
          this.handleError<LeaveRequestModel[]>('getLeaveRequests', [])
        )
      );
    return leaveRequests;
  }

  getLeaveRequestById(id: number): Observable<LeaveRequestModel> {
    let leaveRequest = this.http
      .get<LeaveRequestModel>(`${this.leaveRequestsUrl}/${id}`)
      .pipe(
        tap((_) => this.log('fetched single leave request')),
        catchError(
          this.handleError<LeaveRequestModel>(
            'getLeaveRequestById',
            new LeaveRequestModel()
          )
        )
      );
    return leaveRequest;
  }

  createLeaveRequest(
    leaveRequest: LeaveRequestModel
  ): Observable<LeaveRequestModel> {
    let createdLeaveRequest = this.http
      .post<LeaveRequestModel>(this.leaveRequestsUrl, leaveRequest)
      .pipe(
        tap((newLeaveRequest: LeaveRequestModel) =>
          this.log(`added new leave request w/ id: ${newLeaveRequest.id}`)
        ),
        catchError(this.handleError<LeaveRequestModel>('createLeaveRequest'))
      );
    return createdLeaveRequest;
  }

  updateLeaveRequest(id: number, leaveRequest: LeaveRequest): Observable<any> {
    // this feels wonky, but I need to manually set the id so it's part of the model
    // otherwise the api returns a 404 because of an undefined id
    leaveRequest.id = id;
    let updatedLeaveRequest = this.http
      .put(`${this.leaveRequestsUrl}/${id}`, leaveRequest)
      .pipe(
        tap((_) => this.log(`updated leave request w/ id: ${leaveRequest.id}`)),
        catchError(this.handleError<LeaveRequestModel>('updateLeaveRequest'))
      );
    return updatedLeaveRequest;
  }

  deleteLeaveRequest(id: number): Observable<any> {
    let deletedLeaveRequest = this.http
      .delete(`${this.leaveRequestsUrl}/${id}`)
      .pipe(
        tap((_) => this.log(`deleted leave request w/ id: ${id}`)),
        catchError(this.handleError<LeaveRequestModel>('deleteLeaveRequest'))
      );

    return deletedLeaveRequest;
  }
}
