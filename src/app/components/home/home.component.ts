import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service'
import { Product } from '../../models/Product/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public products: Array<Product> = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
   this.getProducts(); 
  }

  getProducts(){
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    })
  }
 
  filteredProducts(event){
    if(event != null && event.length > 0){
      this.products = event.filter(elem => {
        return elem != null;
      });
    }else{
      this.getProducts();
    }
  }

  deleteProduct(product) {
    Swal.fire({
      title: "Deletar " + product.name + "?",
      text: "Tem certeza que deseja deletar este item?",
      icon: 'question',
      confirmButtonText: 'Sim',
      showCancelButton: true,
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        const payload = {bar_code: product.bar_code}
        this.productService.deleteProduct(payload).subscribe(result=>{
        Swal.fire(
          result.message.title,
          result.message.text,
          'success'
        )
        this.getProducts();
        });
      }
    })
  }

}
