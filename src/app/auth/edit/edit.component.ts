import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsersService } from '../../services/users.service';
import { Users } from '../../model/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  isAuth = false;
  baseUrlImage = `${environment.api_imageUser}`;
  user:Users;
  infoForm: FormGroup;
  errorMessage;
  successMessage;

  constructor( private userService: UsersService,
    private fb: FormBuilder,
    private router:Router) {
    this.isAuth = this.userService.isAuth;
    this.user = this.userService.user;
   }
   ngOnInit(): void {
    window.scrollTo(0,0);
    this.initRegisterForm();
  }
  fieldTextType: boolean;



toggleFieldTextType() {
  this.fieldTextType = !this.fieldTextType;
}

  initRegisterForm(): void{
    this.infoForm = this.fb.group({
      Image: this.fb.control('', ),
      lastname: this.fb.control('', [ Validators.required]),
      firstname: this.fb.control('', [ Validators.required, Validators.minLength(5)]),
      pseudo: this.fb.control('', [ Validators.required]),
      email: this.fb.control('', [ Validators.required, Validators.email]),
      dateBirth: this.fb.control('', [ Validators.required]),
      tel: this.fb.control('', [ Validators.required]),
      adresseLivraison: this.fb.control('', [ Validators.required]),
      adresseFacturation: this.fb.control('', [ Validators.required]),
    });
  }

  
  onSubmit(): void{
    const image = this.infoForm.get('image').value;
    const lastname = this.infoForm.get('lastname').value;
    const firstname = this.infoForm.get('firstname').value;
    const pseudo = this.infoForm.get('pseudo').value;
    const email = this.infoForm.get('email').value;
    const password = this.infoForm.get('password').value;
    const dateBirth = this.infoForm.get('dateBirth').value;
    const tel = this.infoForm.get('tel').value;
    const adresseLivraison = this.infoForm.get('adresseLivraison').value;
    const adresseFacturation = this.infoForm.get('adresseFacturation').value;

    const newUser: Users = {
      idUser:this.user.idUser,
      image: image ,
      lastname: lastname,
      firstname:firstname,
      pseudo:pseudo,
      email:email,
      password:password,
      dateBirth:dateBirth,
      tel:tel,
      adresseFacturation:adresseFacturation,
      adresseLivraison:adresseLivraison,
  };
  

    this.userService.updateUser(newUser)
    .then(
      (data) => {
      this.errorMessage = null;
      this.successMessage = data;
      setTimeout(()=>{
        this.successMessage = null;
        //this.router.navigate(['/shop']);
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
