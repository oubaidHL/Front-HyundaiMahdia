import { CartService } from '../../services/cart.service';
import { Cart } from '../../model/cart';
import { Products } from '../../model/products';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart[] = [];
  prefUrlImage = `${environment.prefUrlImage}`;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

  addProduct(product: Products): void{
    this.cartService.addProductToCard(product);
  }

  deleteProduct(product: Products): void{
    this.cartService.deleteFromCart(product);
  }

}
