import { TestBed } from '@angular/core/testing';

import { LeaveRequestsService } from './leave-requests.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('RequestsService', () => {
  let service: LeaveRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LeaveRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
