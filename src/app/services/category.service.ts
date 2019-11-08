import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/Category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  urlCategories = "http://localhost:3333/categories";
  urlAddCategories = "http://localhost:3333/add/category"

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get<Category[]>(this.urlCategories);
  }

  addCatoregory(payload){
    return this.http.post<any>(this.urlAddCategories, payload, ({
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }))
  }
}
