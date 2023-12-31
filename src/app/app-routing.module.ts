import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveRequestsListComponent } from './components/leave-requests-list/leave-requests-list.component';
import { CreateRequestComponent } from './components/create-leave-request/create-leave-request.component';
import { EditLeaveRequestComponent } from './components/edit-leave-request/edit-leave-request.component';

const routes: Routes = [
  { path: '', component: LeaveRequestsListComponent },
  { path: 'leaverequests/new', component: CreateRequestComponent },
  { path: 'leaverequests/:id', component: EditLeaveRequestComponent },
  { path: 'list', component: LeaveRequestsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
