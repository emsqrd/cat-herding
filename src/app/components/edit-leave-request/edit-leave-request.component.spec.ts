import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveRequestComponent } from './edit-leave-request.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveRequestsService } from '../../services/leave-requests.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { LeaveRequestFormComponent } from '../leave-request-form/leave-request-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('EditLeaveRequestComponent', () => {
  let component: EditLeaveRequestComponent;
  let fixture: ComponentFixture<EditLeaveRequestComponent>;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        ReactiveFormsModule,
        HttpClientModule,
      ],
      declarations: [EditLeaveRequestComponent, LeaveRequestFormComponent],
      providers: [
        { provide: Router },
        { provide: LeaveRequestsService },
        { provide: FormBuilder },
        {
          provide: ActivatedRoute,
          // useValue: { snapshot: { paramMap: { id: 1 } } },
          useValue: {
            snapshot: {
              paramMap: {
                get: (id: string) => {
                  return '1';
                },
              },
            },
          },
        },
        {
          provide: Router,
          useValue: router,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditLeaveRequestComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    // spyRoute.and.returnValue('1');
  });
});
