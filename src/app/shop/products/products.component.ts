import { CartService } from './../../services/cart.service';
import { environment } from './../../../environments/environment';
import { ProductsService } from '../../services/products.service';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Products } from './../../model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products: Products[] = [];
  @Input() isPaginate: boolean = true;
  prefUrlImage = `${environment.prefUrlImage}`;
  prodSub: Subscription;
  currentPage = 0;
  pages = [0,1,2,3,4,5,6];

  constructor(private prodService: ProductsService,
              private cartService: CartService) { }

  ngOnInit(): void {

  }



  addToCart(product: Products): void{
    this.cartService.addProductToCard(product);
  }

  deleteFromCart(product: Products): void{
    this.cartService.deleteFromCart(product);
  }

  changePage(numberPage: number): void{
    const prod = this.prodService.getProductByPage(numberPage);
    if(prod.length){
      this.products = prod;
      this.currentPage = numberPage;
    }
  }

  nextPage(): void{
    const newCurrentPage = this.currentPage +1;
    const prod = this.prodService.getProductByPage(newCurrentPage);
    if(prod.length){
      this.products = prod;
      this.currentPage = newCurrentPage;
    }

  }

  prevPage(): void{
    const newCurrentPage = this.currentPage -1;
    const prod = this.prodService.getProductByPage(newCurrentPage);
    if(prod.length){
      this.products = prod;
      this.currentPage = newCurrentPage;
    }
  }



}
