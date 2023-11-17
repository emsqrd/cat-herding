import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveRequestsService } from '../../services/leave-requests.service';
import { LeaveRequest } from '../../interfaces/leave-request';
import { BehaviorSubject } from 'rxjs';
import { LeaveRequestModel } from '../../models/leave-request.model';

@Component({
  selector: 'ch-edit-leave-request',
  templateUrl: './edit-leave-request.component.html',
  styleUrl: './edit-leave-request.component.scss',
})
export class EditLeaveRequestComponent {
  leaveRequest = new BehaviorSubject<LeaveRequest>(new LeaveRequestModel());

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private leaveRequestService: LeaveRequestsService
  ) {}

  editLeaveRequest(leaveRequest: LeaveRequest) {
    this.leaveRequestService
      .updateLeaveRequest(this.leaveRequest.value.id, leaveRequest)
      .subscribe({
        next: () => {
          this.router.navigate(['/list']);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (!id) {
      console.error('No id provided');
    }

    this.leaveRequestService
      .getLeaveRequestById(id)
      .subscribe((leaverequest) => {
        this.leaveRequest.next(leaverequest);
      });
  }
}
