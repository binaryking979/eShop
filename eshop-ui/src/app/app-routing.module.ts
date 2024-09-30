import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent } from './register/register.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { AuthComponent } from './auth/auth.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product /edit-product.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MyCartComponent } from './my-cart/my-cart.component';
const routes: Routes = [
  {
  path : "product-list",
  component :  ProductListComponent
  },
  {
    path : "add-product",
    component :  AddProductComponent
    },
    {
      path : "edit-product/:id",
      component :  EditProductComponent
      },
      {
        path : "edit-profile",
        component :  EditProfileComponent
        },
  {
    path : "register",
    component :  RegisterComponent
  },
  {
    path : "customer-profile",
    component :  CustomerProfileComponent
  },
  {
    path : "my-cart",
    component :  MyCartComponent
  },
  {
    path : "auth",
    component :  AuthComponent
  },
  
  { path: 'product-detail/:id', component: ProductDetailComponent }, // id parametresi burada

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
