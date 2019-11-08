import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }


  addCategory(name){
    const payload = {
      "name":name,
    } 
    console.log('payload', payload)
    this.categoryService.addCatoregory(payload).subscribe(r=>{
      console.log("add category", r);
      Swal.fire({
        title: "Categoria adicionada",
        text: "A categoria foi adicionada com sucesso!",
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    })
  }


}
