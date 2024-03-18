import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';

import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';

import {  FormBuilder,
  FormControlName,FormGroup,FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [ NavbarComponent,
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent {

  hide = true;

  loginForm!: FormGroup;
  registerForm!: FormGroup;
  activeForm: 'login' | 'register' = 'login';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  login() {
    if (this.loginForm.valid) {
      console.log('Logging in...');
    }
  }

  register() {
    if (this.registerForm.valid) {
      console.log('\Reg in...');
    }
  }

  toggleForm(form: 'login' | 'register') {
    this.activeForm = form;
  }



}
