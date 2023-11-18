import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequestComponent } from './create-leave-request.component';
import { LeaveRequestsService } from '../../services/leave-requests.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { LeaveRequestFormComponent } from '../leave-request-form/leave-request-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LeaveRequestModel } from '../../models/leave-request.model';
import { LeaveTypeModel } from '../../models/leave-type.model';
import { of } from 'rxjs';
import { LeaveRequestsListComponent } from '../leave-requests-list/leave-requests-list.component';

describe('CreateRequestComponent', () => {
  let component: CreateRequestComponent;
  let fixture: ComponentFixture<CreateRequestComponent>;
  let router: Router;
  let leaveRequestServiceMock: ReturnType<jest.Mock>;
  let leaveRequestModelMock: ReturnType<jest.Mock>;

  beforeEach(async () => {
    leaveRequestServiceMock = {
      getLeaveRequests: jest.fn(() => {
        return of({} as LeaveRequestModel);
      }),
      getLeaveTypes: jest.fn(() => {
        return of([{}] as LeaveTypeModel[]);
      }),
      createLeaveRequest: jest.fn(() => {
        return of({} as LeaveRequestModel);
      }),
    };

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'list', component: LeaveRequestsListComponent },
        ]),
        HttpClientModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: LeaveRequestsService, useValue: leaveRequestServiceMock },
        FormBuilder,
      ],
      declarations: [CreateRequestComponent, LeaveRequestFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRequestComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to list after creating leave request', () => {
    fixture.ngZone?.run(() => {
      const navigateSpy = jest.spyOn(router, 'navigate');

      component.createLeaveRequest(leaveRequestModelMock);
      expect(navigateSpy).toHaveBeenCalled();
      expect(navigateSpy).toHaveBeenCalledWith(['/list']);
    });
  });
});
