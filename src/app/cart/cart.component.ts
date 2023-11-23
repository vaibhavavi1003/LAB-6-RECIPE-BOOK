import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartIngredients: string[];

  constructor(private recipeService: RecipeService) {
    this.cartIngredients = this.recipeService.getCartItems();
  }

  removeIngredient(ingredient: string) {
    this.recipeService.removeFromCart(ingredient);
  }
}
