import { Result } from './../model/result';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Users } from './../model/users';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class UsersService {
  private baseUrl = `${environment.API+'getUsers.php'+'?API_KEY='+environment.API_KEY}`;
  private baseUrlUpdate = `${environment.API+'updateUsers.php'+'?API_KEY='+environment.API_KEY}`;

  user: Users;
  isAuth = false;
  userSubject = new Subject<Users>();

  constructor(private http: HttpClient) { }

  emitUser(): void{
    this.userSubject.next(this.user);
  }

  authentifier(newUser: Users){
    return new Promise(
      (resolve,reject)=>{
        const url = `${environment.API + 'authentifier.php?' + environment.API_KEY}` + '&email=' + newUser.email +
        '&password=' + newUser.password;

        this.http.get(url).subscribe(
          (data: Result)=>{
            if(data.status == 200){
              this.user = data.result;
              this.isAuth = true;
              this.emitUser();
              resolve(data.result);
            }else{
              console.log(data.result);
              reject(data.message);

            }
          },(error)=>{
            console.log('error : ' + error);
            reject(false);

          }
        )
      }
    )
  }


  getUsers(): Observable<Response>{
    return this.http.get<Response>(this.baseUrl);
  }

  editUsers(user : Users): Observable<Response>{
    const url = this.baseUrlUpdate+this.constructURLParams(user);
    return this.http.get<Response>(url);
  }

  constructURLParams = (object) => {
    let result = '';
    for (const property in object) {
        result += `&${property}=${object[property]}`;
    }
    return result;
  }


  

  createUser(newUser: Users){

    return new Promise(
      (resolve,reject)=>{
        const url = `${environment.API + 'createUsers.php?' + environment.API_KEY}` +
        '&email=' + newUser.email + '&password=' + newUser.password + '&sexe=' + newUser.sexe +
        '&firstname=' + newUser.firstname + '&lastname=' + newUser.lastname + '&dateBirth=' +
        newUser.dateBirth + '&pseudo=' + newUser.pseudo;

        this.http.get<Result>(url).subscribe(
          (data: Result)=>{
            console.log(data);

            if(data.status == 200){
              this.user = data.args;
              this.isAuth = true;
              this.emitUser();
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

  updateUser(newUser: Users){

    return new Promise(
      (resolve,reject)=>{
        const url = `${environment.API + 'createUsers.php?' + environment.API_KEY}` +
        '&idUser=' + this.user.idUser +'&email=' + newUser.email + '&password=' + newUser.password + '&tel=' + newUser.tel +
        '&firstname=' + newUser.firstname + '&lastname=' + newUser.lastname + '&dateBirth=' +
        newUser.dateBirth + '&pseudo=' + newUser.pseudo+ '&image=' + newUser.image+ '&adresseFacturation=' + newUser.adresseFacturation+ '&adresseLivraison=' + newUser.adresseLivraison;

        this.http.get<Result>(url).subscribe(
          (data: Result)=>{
            console.log(data);

            if(data.status == 200){
              this.user = data.args;
              this.isAuth = true;
              this.emitUser();
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

 logout(): void{
   this.user = null;
   this.isAuth = false;
   this.userSubject = new Subject<Users>();
 }




}
