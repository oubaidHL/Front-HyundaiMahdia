import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CaptchaComponent } from 'angular-captcha';
import { Testdrive } from '../model/testdrive';
import { TestdriveService } from '../services/testdrive.service';

@Component({
  selector: 'app-testdrive',
  templateUrl: './testdrive.component.html',
  styleUrls: ['./testdrive.component.css']
})
export class TestdriveComponent implements OnInit {

  /**
   * BotDetect CAPTCHA component.
   */
   @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;

   /**
    * On form submit.
    */
    validate(value, valid): void {

      this.captchaComponent.validateUnsafe((isCaptchaCodeCorrect: boolean) => {
        if (isCaptchaCodeCorrect) {
          // Captcha code is correct
        } else {
          // Captcha code is incorrect
        }
      });
    }

  choose: FormGroup;
  TestForum: FormGroup;
  errorMessage;
  successMessage;
  siteKey:string ;
  constructor(
              private fb: FormBuilder,
              private TestdriveService: TestdriveService,
              private router: Router
  ) { 
    this.siteKey='6LeUUpEbAAAAAPRvc4w0VtQXBYxp1l2EnO_A7Y1i';
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
    this.choose = this.fb.group({
      model: this.fb.control('', [ Validators.required]),
    });

    this.TestForum = this.fb.group({
      sexe: this.fb.control('', [ Validators.required]),
      adresse: this.fb.control('', [ Validators.required]),
      lastname: this.fb.control('', [ Validators.required]),
      firstname: this.fb.control('', [ Validators.required]),
      email: this.fb.control('', [ Validators.required, Validators.email]),
      cp: this.fb.control('', [ Validators.required, Validators.minLength(4),Validators.maxLength(4)]),
      ville: this.fb.control('', [ Validators.required]),
      tlfn: this.fb.control('', [ Validators.required, Validators.minLength(8),Validators.maxLength(8)]),
      message: this.fb.control('', [ Validators.required]),
    });
  }


  onSubmit(): void{
    const model = this.choose.get('model').value;
    const sexe = this.TestForum.get('sexe').value;
    const adresse = this.TestForum.get('adresse').value;
    const lastname = this.TestForum.get('lastname').value;
    const firstname = this.TestForum.get('firstname').value;
    const email = this.TestForum.get('email').value;
    const cp = this.TestForum.get('cp').value;
    const ville = this.TestForum.get('ville').value;
    const tlfn = this.TestForum.get('tlfn').value;
    const message = this.TestForum.get('message').value;

    const newTest: Testdrive = {
      model: model,
      sexe: sexe,
      adresse: adresse,
      lastname: lastname,
      firstname: firstname,
      email: email ,
      cp: cp ,
      ville: ville,
      tlfn: tlfn,
      message: message

    }
    this.TestdriveService.createTestDrive(newTest)
    .then(
      (data) => {
      this.errorMessage = null;
      this.successMessage = data;
      setTimeout(()=>{
        this.successMessage = null;
        this.router.navigate(['/profile']);
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
