import { TestBed } from '@angular/core/testing';

import { LeaveRequestsService } from './leave-requests.service';
import {
  HttpClient,
  HttpClientModule,
  HttpStatusCode,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LeaveRequestModel } from '../models/leave-request.model';
import { LeaveTypeModel } from '../models/leave-type.model';

describe('RequestsService', () => {
  let service: LeaveRequestsService;
  let httpTestingController: HttpTestingController;

  let leaveRequestModelMock: LeaveRequestModel = {
    id: 1,
    description: 'asdf',
    leaveDate: new Date(),
    leaveType: 'Vacation',
  };

  let leaveTypeModelMock: LeaveTypeModel[] = [
    {
      id: 2,
      name: 'Vacation',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeaveRequestsService],
    });

    service = TestBed.inject(LeaveRequestsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return a collection of leave types', async () => {
    const url = 'api/leaveTypes';

    service.getLeaveTypes().subscribe((leaveTypes) => {
      expect(leaveTypes).toEqual(leaveTypeModelMock);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');

    req.flush(leaveTypeModelMock);
  });

  it('updates an existing leave request', async () => {
    let expectedLeaveRequest: LeaveRequestModel = {
      id: 2,
      description: 'asdf3',
      leaveType: 'Vacation',
      leaveDate: new Date('2023-11-10'),
    };

    const url = `api/leaveRequests/${expectedLeaveRequest.id}`;

    service
      .updateLeaveRequest(expectedLeaveRequest.id, expectedLeaveRequest)
      .subscribe((data) => expect(data).toEqual(expectedLeaveRequest));

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('PUT');

    req.flush(expectedLeaveRequest);
  });

  // it('creates a new leave request', async () => {
  //   let expectedLeaveRequest: LeaveRequestModel = {
  //     id: 1,
  //     description: 'asdf3',
  //     leaveType: 'Vacation',
  //     leaveDate: new Date('2023-11-10'),
  //   };

  //   const url = 'api/leaveRequests';

  //   // httpClient.post<LeaveRequestModel>(url, expectedLeaveRequest).subscribe();

  //   const req = httpTestingController.expectOne(url);

  //   expect(req.request.method).toEqual('POST');

  //   req.flush(expectedLeaveRequest);

  //   expect(req.request.body).not.toBeNull();
  //   expect(req.request.body).toEqual(expectedLeaveRequest);
  // });

  // it('deletes an existing leave request', async () => {
  //   let leaveRequestToDelete: LeaveRequestModel = {
  //     id: 1,
  //     description: 'asdf3',
  //     leaveType: 'Vacation',
  //     leaveDate: new Date('2023-11-10'),
  //   };

  //   const url = `api/leaveRequests/${leaveRequestToDelete.id}`;

  //   // delete the leave request
  //   // httpClient.delete<LeaveRequestModel>(url).subscribe();

  //   const req = httpTestingController.expectOne(url);

  //   expect(req.request.method).toEqual('DELETE');

  //   req.flush(leaveRequestToDelete);

  //   expect(req.request.body).toBeNull();
  // });
});
