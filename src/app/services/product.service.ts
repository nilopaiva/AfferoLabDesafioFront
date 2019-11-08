import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlProducts: string = "http://localhost:3333/products";
  urlProduct: string = "http://localhost:3333/product";
  urlEditProduct: string = "http://localhost:3333/edit/product";
  urlAddProduct: string = "http://localhost:3333/add/product";
  urlDeleteProduct: string = "http://localhost:3333/delete/product";

  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get<Product[]>(this.urlProducts);
  }

  getProduct(bar_code){
    return this.http.get<Product>(this.urlProduct + "/" + bar_code);
  }

  addProduct(payload){
    return this.http.post<Product>(this.urlAddProduct, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteProduct(payload){
    return this.http.post<any>(this.urlDeleteProduct, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  editProduct(payload){
    return this.http.put<any>(this.urlEditProduct, payload, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
