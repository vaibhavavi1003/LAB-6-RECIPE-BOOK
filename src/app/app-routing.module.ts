import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    component:RecipeListComponent,
    path:''
  },
  {
    component:RecipeFormComponent,
    path:'recipe'
  },
  {
    component:CartComponent,
    path:'cart'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
