import { Result } from './../model/result';
import { environment } from './../../environments/environment';
import { Cart } from './../model/cart';
import { Users } from './../model/users';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from '../model/orders';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class OrdersService {
  orders: Orders[] = [];
  orderSubject = new Subject<Orders[]>();
  private baseUrl = `${environment.API+'getOrders.php'+'?API_KEY='+environment.API_KEY}`;

  constructor(private http: HttpClient, private cartService: CartService) {  }
  getOrders(): Observable<Response>{
    return this.http.get<Response>(this.baseUrl);
  }

  createOrders(user: Users, cart: Cart[]){
    return new Promise(
      (resolve,reject)=>{
        cart.forEach((data)=>{
          const price = data.number * data.product.price;

          const url = `${environment.API + "createOrders.php?" + environment.API_KEY}` +
          '&idUser=' + user.idUser + '&idProduct=' + data.product.idProduct + '&quantity=' + data.number +
          '&price=' + price ;

          this.http.get(url).subscribe(
            (response: Result)=>{
              if(response.status == 200){
                this.cartService.removeElementOfCart(0);
                if(cart.length == 0){
                  resolve(true);
                } 
              }else{
                reject(response.message);
              }
            },
            (error)=>{
              reject("Error : " + error);
            }
          )


        });//end foreach
      }
    )
  }

  
}
