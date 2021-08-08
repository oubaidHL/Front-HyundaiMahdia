import { Router } from '@angular/router';
import { Users } from './../../model/users';
import { UsersService } from './../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage;
  successMessage;

  constructor(private fb: FormBuilder,
              private userService: UsersService,
              private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.initRegisterForm();
  }
  fieldTextType: boolean;



toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}

  initRegisterForm(): void{
    this.registerForm = this.fb.group({
      sexe: this.fb.control('', [ Validators.required]),
      pseudo: this.fb.control('', [ Validators.required]),
      lastname: this.fb.control('', [ Validators.required]),
      firstname: this.fb.control('', [ Validators.required, Validators.minLength(5)]),
      email: this.fb.control('', [ Validators.required, Validators.email]),
      password: this.fb.control('', [ Validators.required, Validators.minLength(6)]),
      dateBirth: this.fb.control('', ),
    });
  }

  
  onSubmit(): void{
    const sexeUser = this.registerForm.get('sexe').value;
    const pseudoUser = this.registerForm.get('pseudo').value;
    const firstnameUser = this.registerForm.get('firstname').value;
    const lastnameUser = this.registerForm.get('lastname').value;
    const emailUser = this.registerForm.get('email').value;
    const passwordUser = this.registerForm.get('password').value;
    const dateBirthUser = this.registerForm.get('dateBirth').value;

    const newUser: Users = {
      sexe: sexeUser,
      firstname: firstnameUser,
      lastname: lastnameUser,
      email: emailUser,
      password: passwordUser,
      dateBirth: dateBirthUser,
      pseudo: pseudoUser
  };
  

    this.userService.createUser(newUser)
    .then(
      (data) => {
      this.errorMessage = null;
      this.successMessage = data;
      setTimeout(()=>{
        this.successMessage = null;
        this.router.navigate(['/shop']);
      },2000);
    })
    .catch((error) => {
      this.errorMessage = error;
      setTimeout(() => {
        this.errorMessage = null;
      }, 3000);
      console.log(error);
    });
  }


}
