import { Result } from './../model/result';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Testdrive } from '../model/testdrive';

@Injectable({
  providedIn: 'root'
})
export class TestdriveService {

  test: Testdrive;
  isAuth = false;
  testSubject = new Subject<Testdrive>();

  constructor(private http: HttpClient) { }

  emitTest(): void{
    this.testSubject.next(this.test);
  }
  createTestDrive(newUser: Testdrive){

    return new Promise(
      (resolve,reject)=>{
        const url = `${environment.API + 'createTestDrive.php?' + environment.API_KEY}` +
        '&email=' + newUser.email + '&model=' + newUser.model + '&sexe=' + newUser.sexe +
        '&firstname=' + newUser.firstname + '&lastname=' + newUser.lastname + '&ville='+
         newUser.ville + '&adresse=' + newUser.adresse + '&cp=' + newUser.cp + '&tlfn=' +
           newUser.tlfn+ '&message=' +newUser.message ;

        this.http.get<Result>(url).subscribe(
          (data: Result)=>{
            console.log(data);

            if(data.status == 200){
              this.test = data.args;
              this.isAuth = true;
              this.emitTest();
              resolve(data.result);
            }else{
              reject(data.message);
            }

          },
          (error)=>{
            reject(error);
          }
        );
      }
    );
  }
}