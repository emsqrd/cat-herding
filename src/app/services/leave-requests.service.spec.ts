import { TestBed } from '@angular/core/testing';

import { LeaveRequestsService } from './leave-requests.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LeaveRequestModel } from '../models/leave-request.model';
import { LeaveTypeModel } from '../models/leave-type.model';

describe('RequestsService', () => {
  let service: LeaveRequestsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  let leaveRequestModelMock: LeaveRequestModel = {
    id: 1,
    description: 'asdf',
    leaveDate: new Date(),
    leaveType: 'Vacation',
  };

  let leaveTypeModelMock: LeaveTypeModel[] = [
    {
      id: 1,
      name: 'Vacation',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(LeaveRequestsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getLeaveTypes returns a collection of leave types', async () => {
    let leaveTypes: LeaveTypeModel[] = [];

    service.getLeaveTypes().subscribe((data) => (leaveTypes = data));

    const req = httpTestingController.expectOne('api/leaveTypes');

    expect(req.request.method).toEqual('GET');

    req.flush(leaveTypeModelMock);

    expect(leaveTypes).toEqual(leaveTypeModelMock);
  });

  it('updates an existing leave request', async () => {
    let expectedLeaveRequest: LeaveRequestModel = {
      id: 2,
      description: 'asdf3',
      leaveType: 'Vacation',
      leaveDate: new Date('2023-11-10'),
    };

    const url = `api/leaveRequests/${expectedLeaveRequest.id}`;

    httpClient.put<LeaveRequestModel>(url, expectedLeaveRequest).subscribe();

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('PUT');

    req.flush(expectedLeaveRequest);

    expect(req.request.body).not.toBeNull();
    expect(req.request.body).toEqual(expectedLeaveRequest);
  });

  it('creates a new leave request', async () => {
    let expectedLeaveRequest: LeaveRequestModel = {
      id: 1,
      description: 'asdf3',
      leaveType: 'Vacation',
      leaveDate: new Date('2023-11-10'),
    };

    const url = 'api/leaveRequests';

    httpClient.post<LeaveRequestModel>(url, expectedLeaveRequest).subscribe();

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('POST');

    req.flush(expectedLeaveRequest);

    expect(req.request.body).not.toBeNull();
    expect(req.request.body).toEqual(expectedLeaveRequest);
  });
});
