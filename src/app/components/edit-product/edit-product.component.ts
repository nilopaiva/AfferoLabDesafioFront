import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

import Swal from 'sweetalert2';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { Product } from '../../models/Product/product';
import { Category } from '../../models/Category/category';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  public bar_code: string;
  public product: Product = {
      bar_code: '',
      name: '',
      amount: 0,
      description: '',
      category: '',
      photo: '',
      updated_at: ''
    }
  public categories: Array<Category> = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private cdRef:ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.getParams();
    this.getCategories();
  }

  getParams(){
    this.route.params.subscribe(bar_code=>{
      this.bar_code = bar_code.bar_code;
      this.getProduct(this.bar_code);
    });
  }

  getProduct(bar_code){
    this.productService.getProduct(bar_code).subscribe(product =>{
      this.product = product[0];
      this.cdRef.detectChanges();
    });
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  editProduct(newBarCode, newName, newCategory, newAmount, newDescription, newPhoto){
    const payload = {
      bar_code: this.bar_code,
      new_bar_code: newBarCode,
      name: newName,
      description: newDescription,
      category: newCategory,
      amount: newAmount, 
      photo: newPhoto
    }
    this.productService.editProduct(payload).subscribe(response=>{
      let message = response.message;
      Swal.fire({
        title: message.title,
        text: message.text,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    });
  }

}
