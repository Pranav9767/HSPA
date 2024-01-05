import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit{
 
  registrationForm!: FormGroup;
  user:User={
    userName: '',
    email: '',
    password: '',
    mobile: 0
  };
  userSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private userservice : UserServiceService
    ,private alertify: AlertyfyService ) {
    this.registrationForm = this.formBuilder.group({
      userName: new FormControl(null,Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    }, {
      validators: this.passwordMatchingValidator  // Add the custom validator to the 'validators' array
    });
    // this.createRegistrationForm();
  }
  ngOnInit(){
    //this.createRegistrationForm();
  }

  // createRegistrationForm()
  // {
  //   this.user = new FormGroup{
  //     this.registrationForm = this.formBuilder.group({
  //       userName: [null,Validators.required],
  //       email: [null,[Validators.required,Validators.email]],
  //       password: [null,[Validators.required,Validators.minLength(8)]],
  //       confirmPassword: [null,Validators.required],
  //       mobile: [null,[Validators.required,Validators.maxLength(10)]]
  //     },{Validators:this.passwordMatchingValidator})
  //   }
  // }
  // //   this.registrationForm = this.formBuilder.group({
  // //     userName: [null,Validators.required],
  // //     email: [null,[Validators.required,Validators.email]],
  // //     password: [null,[Validators.required,Validators.minLength(8)]],
  // //     confirmPassword: [null,Validators.required],
  // //     mobile: [null,[Validators.required,Validators.maxLength(10)]]
  // //   },{Validators:this.passwordMatchingValidator})
  // // }

  
  onSubmit(){
    console.log(this.registrationForm.value)
    this.userSubmitted = true;
    if(this.registrationForm.valid)
    {
    //this.user = Object.assign(this.user,this.registrationForm.value)
    this.userservice.saveUniqueData('Users',this.userData())
    this.registrationForm.reset()
    this.userSubmitted = false;
    this.alertify.successs("User registred successfully");
    }
    else
    {
      this.alertify.error("Kindly provide the required fields");
      
    }
  }

  userData():User{
    return this.user = {
      userName:this.userName.value,
      email:this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
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



















