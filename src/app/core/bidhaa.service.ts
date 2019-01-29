import { Injectable } from '@angular/core';
import {Headers,RequestOptions, Http, Response} from '@angular/http';

import { Bidhaa } from './../bidhaa';
import { BidhaaCategory } from './../bidhaaCategory';
import { Order } from './../order';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class BidhaaService {

 

  constructor(private http: Http) { }
  
  bidhaa: Bidhaa[];
  bidhaaCategory: BidhaaCategory[];
  orders: Order[];

  fetchedBidhaa: Subject<Bidhaa[]> = new Subject<Bidhaa[]>();  
  fetchedbidhaaCategories: Subject<BidhaaCategory[]> = new Subject<BidhaaCategory[]>();
  fetchedOrders: Subject<Order[]> = new Subject<Order[]>();
  //notification = new Subject<any>();


  bidhaaUrl = 'http://localhost:8000/api/v1/products' ;
  bidhaaCategoriesUrl =  'http://lishe-360.herokuapp.com/api/v1/productsCategories'// 'http://localhost:8000/api/v1/productsCategories' ;
  bidhaaByIdUrl = 'http://localhost:8000/api/v1/productsByCategory' ;
  orderUrl = 'http://localhost:8000/api/v1/orders';

  // getBidhaa(id: number): void {                               
  //   const url = `${this.bidhaaUrl}/${id}`;
    
  //   this.http.get(url).subscribe((res: Response) => {
  //       this.bidhaa = res.json().data; 
  //       this.fetchedBidhaa.next(this.bidhaa)       
        
  //   });
  // }



 updateProductCategory(category:BidhaaCategory, id): Promise<BidhaaCategory> {
    const url = `${this.bidhaaCategoriesUrl}/${id}`;

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
   
    return this.http
           .put(url, category, options)
           .toPromise()
           .then(res => res.json().data as BidhaaCategory)
           .catch(this.handleError);
           
}


 deleteCategory(id) {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  const url = `${this.bidhaaCategoriesUrl}/${id}`;
  return this.http.delete(url, options)//.pipe().catch(this.handleError);
}

 createOrder(order:Order): Promise<Order> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http
      .post(this.orderUrl, order, options)
      .toPromise()
      .then(res => res.json().data as Order)
      .catch(this.handleError);
    }

 create(bidhaa:Bidhaa): Promise<Bidhaa> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    console.log('service method hit');
    return this.http
      .post(this.bidhaaUrl, bidhaa, options)
      .toPromise()
      .then(res => res.json().data as Bidhaa)
      .catch(this.handleError);
    }


 createCategory(bidhaacategory:BidhaaCategory): Promise<BidhaaCategory> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http
      .post(this.bidhaaCategoriesUrl, bidhaacategory, options)
      .toPromise()
      .then(res => res.json().data as BidhaaCategory)
      .catch(this.handleError);
    }


 getOrders():void {
      this.http.get(this.orderUrl).subscribe((res: Response) => {
                      this.orders = res.json().data; 
                      this.fetchedOrders.next(this.orders); 
                  });


                   
   } 

 getBidhaaCategory (): void {                              
    const url = this.bidhaaCategoriesUrl;
    
    this.http.get(url).subscribe((res: Response) => {
        this. bidhaaCategory = res.json().data; 
        this.fetchedbidhaaCategories.next(this.bidhaaCategory); 
    });

  }

 getProductsCategories(): Promise<BidhaaCategory[]> {
    return this.http.get(this.bidhaaCategoriesUrl)
                    .toPromise()
                    .then(response => response.json().data as BidhaaCategory[])
                    .catch(this.handleError);
   } 


 getBidhaa(id: number): Promise<Bidhaa[]> {
    const url = `${this.bidhaaByIdUrl}/${id}`;
 
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Bidhaa[])
                    .catch(this.handleError);
   }
   


 getProducts(): Promise<Bidhaa[]> {
    return this.http.get(this.bidhaaUrl)
                    .toPromise()
                    .then(response => response.json().data as Bidhaa[])
                    .catch(this.handleError);
   } 

   
 getCategories(): Promise<BidhaaCategory[]> {
    return this.http.get(this.bidhaaCategoriesUrl)
                    .toPromise()
                    .then(response => response.json().data as BidhaaCategory[])
                    .catch(this.handleError);
   } 


 //for sorting products based on categories on bidhaa page
 getBidhaaByCategory (id: number): void {                              
  const url = `${this.bidhaaByIdUrl}/${id}`;
  
  this.http.get(url).subscribe((res: Response) => {
      this. bidhaa = res.json().data; 
      this.fetchedBidhaa.next(this.bidhaa); 
  });

}


 //To load products from all categories
 getAllBidhaa (): void {                              
  const url = this.bidhaaUrl;
  
  this.http.get(url).subscribe((res: Response) => {
      this. bidhaa = res.json().data; 
      this.fetchedBidhaa.next(this.bidhaa); 
  });

}


// notifyChildComponent (): void {                           
//       var data:any = 1
//       this.notification.next(data); 
 
// }


   
 private handleError (error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }

}
