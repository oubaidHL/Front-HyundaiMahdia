import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../model/users';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() users: Users[] = [];
  orderSub;
  userSub: Subscription;
  user: Users;
  isAuth = false;
  baseUrlImage = `${environment.api_imageUser}`;
  constructor( private userService: UsersService ) { 
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  /*  this.userSub = this.userService.userSubject.subscribe(
      (data)=>{
        //this.user = this.userService.getUser() ;
        data;
      }
    );
    this.userService.emitUser();*/
    this.isAuth = this.userService.isAuth;
    
  }
    
}
