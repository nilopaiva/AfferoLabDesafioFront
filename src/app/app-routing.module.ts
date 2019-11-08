import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';


const routes: Routes = [
  {
    path:'dashboard',
    component:HomeComponent
  },
  {
    path:'editar/:bar_code',
    component:EditProductComponent
  },
  {
    path:'adicionar/produto',
    component:AddProductComponent
  },
  {
    path:'adicionar/categoria',
    component:AddCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
