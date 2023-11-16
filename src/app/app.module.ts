import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRequestComponent } from './components/create-leave-request/create-leave-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeaveRequestsListComponent } from './components/leave-requests-list/leave-requests-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { LeaveRequestFormComponent } from './components/leave-request-form/leave-request-form.component';
import { EditLeaveRequestComponent } from './components/edit-leave-request/edit-leave-request.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent,
    CreateRequestComponent,
    LeaveRequestsListComponent,
    LeaveRequestFormComponent,
    EditLeaveRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterTestingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
