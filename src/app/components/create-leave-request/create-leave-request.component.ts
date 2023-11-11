import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveType } from '../../models/leave-type';
@Component({
  selector: 'ch-create-leave-request',
  templateUrl: './create-leave-request.component.html',
  styleUrl: './create-leave-request.component.scss'
})


export class CreateRequestComponent {
 
  leaveRequestForm = this.fb.group({
    description: [''],
    type: [''],
    date: [''],
  })

  types: LeaveType[] = [
    { id: 1, name: 'Vacation' },
    { id: 2, name: 'Sick' },
    { id: 3, name: 'Volunteer' },
    { id: 4, name: 'Appointment' },
  ];

  constructor(
    private fb: FormBuilder) { }
  
  onSubmit(): void {
    console.log(this.leaveRequestForm.value);
  }

}
