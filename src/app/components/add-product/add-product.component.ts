import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public categories: Array<any> = [];
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
    ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  addProduct(bar_code, name, category, amount, description, photo){
    const payload = {
      "bar_code":bar_code,
      "name":name,
      "description":description,
      "category":category,
      "amount":amount,
      "photo":photo
    } 
    console.log('payload', payload)
    this.productService.addProduct(payload).subscribe(message=>{
      Swal.fire({
        title: "Produto adicionado",
        text: "Seu produto foi adicionado com sucesso!",
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    })
  }

}
