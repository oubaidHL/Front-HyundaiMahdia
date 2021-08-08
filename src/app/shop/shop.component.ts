import { ProductsService } from '../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hyundai',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products = [];
  prodSub: Subscription;

  constructor(private prodService: ProductsService) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.prodSub = this.prodService.prodSubject.subscribe(
      (data)=>{
        this.products = this.prodService.getProductByPage(0) ;//data;
      }
    );
    this.prodService.emitProducts();
  }

}
