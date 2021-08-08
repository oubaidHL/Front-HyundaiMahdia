import { Products } from './../model/products';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Products[] = [];
  prodSubject = new Subject<Products[]>();

  numberOfProductByPage = 6;

  constructor(private http: HttpClient) {
    this.getProductsFromServer();
  }

  emitProducts(): void{
    this.prodSubject.next(this.products);
  }

  getProductsFromServer(): void{
    const url = `${environment.API + 'getProducts.php?' + environment.API_KEY}`;

    this.http.get(url).subscribe(
      (dataProducts: Result)=>{
        if(dataProducts.status == 200){
          this.products = dataProducts.result;
          this.emitProducts();
        }else{
          console.log("Error : "+dataProducts.message);

        }
      }
      
    );
  }

  getProductById(id: number): Products{
    const product = this.products.find(element => element.idProduct == id);
    if(product){
      return product;
    }
    return null;
  }

  getProductByPage(numberPage: number): Products[]{
    const numberOfPage = this.products.length/this.numberOfProductByPage;
    if( numberPage >0 || numberPage < numberOfPage ){
      const prodResult = this.products.slice(numberPage*this.numberOfProductByPage, (numberPage+1)*this.numberOfProductByPage);
      return prodResult;
    }
    return null;
  }




}
