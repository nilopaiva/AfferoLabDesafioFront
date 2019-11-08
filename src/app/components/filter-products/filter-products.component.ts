import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product/product';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.scss']
})
export class FilterProductsComponent implements OnInit {
  
  @Input() products:Array<Product>;
  @Output() filter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filterProducts(event){
    this.getProducts(event.target.value);
  }

  getProducts(value){
    if(value != ''){
      let filteredProducts = this.products.filter(element => {
        if(element && element.name.toLowerCase().includes(value.toLowerCase())){
          return element; 
        }
      });
      this.filter.emit(filteredProducts);
    }else{
      this.filter.emit(null);  
    }
  }
}
