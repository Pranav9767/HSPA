import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{
  
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      userName: new FormControl('Mark', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, {
      validators: this.passwordMatchingValidator  // Add the custom validator to the 'validators' array
    });
  }
  ngOnInit(){
     
  }

  
  onSubmit(){
    console.log(this.registrationForm)
  }

  passwordMatchingValidator(control: FormGroup): { notmatched: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notmatched: true };
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl
  }

  get email(){
    return this.registrationForm.get('email') as FormControl
  }

  get password(){
    return this.registrationForm?.get('password') as FormControl
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl
  }
}



















