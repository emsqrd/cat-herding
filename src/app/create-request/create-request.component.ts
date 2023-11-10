import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Types } from '../types';

@Component({
  selector: 'ch-create-request',
  templateUrl: './create-request.component.html',
  styleUrl: './create-request.component.scss'
})


export class CreateRequestComponent {
 
  requestForm: FormGroup = new FormGroup({});

  types: Types[] = [
    { id: 1, name: 'Vacation' },
    { id: 2, name: 'Sick' },
  ];

  constructor(
    private fb: FormBuilder) { }
  
  submitForm(): void {

  }

}
