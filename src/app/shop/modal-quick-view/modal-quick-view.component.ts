import { environment } from './../../../environments/environment';
import { Products } from './../../model/products';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-modal-quick-view',
  templateUrl: './modal-quick-view.component.html',
  styleUrls: ['./modal-quick-view.component.css']
})
export class ModalQuickViewComponent implements OnInit {

  @Input() products: Products[];
  prefUrlImage = `${environment.prefUrlImage}`;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addCart(product: Products): void{
    this.cartService.addProductToCard(product);
  }



}
