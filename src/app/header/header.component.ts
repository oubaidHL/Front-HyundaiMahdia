import { UsersService } from './../services/users.service';
import { Subscription } from 'rxjs';
import { Category } from './../model/category';
import { CategoryService } from './../services/category.service';
import { Cart } from '../model/cart';
import { Products } from '../model/products';
import { CartService } from '../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: Cart[] = [];
  cartData;
  categories: Category[];
  categorySub: Subscription;
  isAuth = false;

  constructor(private cartService: CartService,
              private categoryService: CategoryService,
              private userService: UsersService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
    this.cartData = this.cartService.cartData;
    this.isAuth = this.userService.isAuth;
    this.categorySub = this.categoryService.categorySubject.subscribe(
      (data: Category[])=>{
        this.categories = data;
      }
    );
    this.categoryService.emitCategories();
  }

  logout(){

    this.userService.logout();
    this.isAuth = this.userService.isAuth;

  }

  today = Date.now();
  fixedTimezone = this.today;

}
