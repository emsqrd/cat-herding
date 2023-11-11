import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRequestComponent } from './components/create-request/create-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LeaveRequestsListComponent } from './components/leave-requests-list/leave-requests-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRequestComponent,
    LeaveRequestsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
