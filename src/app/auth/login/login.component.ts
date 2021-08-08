import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { Users } from './../../model/users';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService,FacebookLoginProvider,GoogleLoginProvider,SocialUser } from 'angularx-social-login';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  socialUser: SocialUser;
  isLoggedin: boolean = null;
  errorMessage;

  constructor(private userService: UsersService,
              private router: Router,
              private fb: FormBuilder,
              private cartService: CartService,
              private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.initFormLogin();
    
  }

  

  signOut(): void {
    this.socialAuthService.signOut();
    localStorage.removeItem("key");
  }




  initFormLogin(): void{
    this.loginForm = this.fb.group({
      email: this.fb.control('',Validators.email),
      password: this.fb.control('',Validators.minLength(6))
    });
    this.socialAuthService.authState.subscribe((socialUser) => {
      this.socialUser = socialUser;
      this.isLoggedin = (socialUser != null);
    });
  }


  onSubmit(): void{
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    const newUser: Users = {email: email, password:password};
    this.userService.authentifier(newUser).then(
      (data)=>{
        localStorage.setItem("email",email);
        const cart = this.cartService.cart;
        if(cart.length){
          this.router.navigate(['/checkout']);
        }else{
          this.router.navigate(['/shop']);
        }

      }
    ).catch((error)=>{
      this.errorMessage = error;
      setTimeout(() =>{
        this.errorMessage = null;
      },3000);
      console.log(error);

    });

    


    //console.log({email: email, password: password});

  }

  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  
  loginWithGmail(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  

}
