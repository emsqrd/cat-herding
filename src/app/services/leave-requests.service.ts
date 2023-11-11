import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { LeaveType } from '../interfaces/leave-type';
import { MessageService } from './message.service';
import { LeaveRequestModel } from '../models/leave-request.model';

@Injectable({
  providedIn: 'root'
})
export class LeaveRequestsService {

  private url: string = 'api';


  private log(message: string){
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
    return this.http.get<LeaveType[]>(`${this.url}/leaveTypes`);
  }

  getLeaveRequests(): Observable<LeaveRequestModel[]> {
    console.log('get requests');
    let leaveRequests = this.http.get<LeaveRequestModel[]>(`${this.url}/leaveRequests`)
      .pipe(
        tap(_ => this.log('fetched leave requests')),
        catchError(this.handleError<LeaveRequestModel[]>('getLeaveRequests', []))      
      );
    return leaveRequests;    
  }
}
