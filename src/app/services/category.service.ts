import { Result } from './../model/result';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Category } from './../model/category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];
  categorySubject = new Subject<Category[]>();

  constructor(private http: HttpClient) {
    this.getCategoryFromServer()
   }

  emitCategories(): void{
    this.categorySubject.next(this.categories);
  }
  getCategoryFromServer(): void{
    const url = `${environment.API + 'getCategory.php?' + environment.API_KEY}`;
    this.http.get(url).subscribe(
      (response: Result)=>{
        if(response.status == 200){
          this.categories = response.result;
          this.emitCategories();
        }else{
          console.log(response.message);

        }
      }
    )
  }


}
