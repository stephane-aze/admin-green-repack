import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  submitted = false;
  errorMessage: string;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router){}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.signinForm.controls; }
  onSubmit() {
    this.submitted = true;
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    const loginAuth = {
      password,
      email
    }
    this.authService.login(loginAuth).subscribe(
      (data)=>{
      console.log(data)
      this.router.navigate(['/dashboard']);
    },
    (err)=>{
      this.errorMessage = err;
    })
  }

}
