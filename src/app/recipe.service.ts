import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [];
  private cart: string[] = [];

  getRecipes() {
    return this.recipes; 
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  addToCart(ingredient: string) {
    this.cart.push(ingredient);
  }

  removeFromCart(ingredient: string) {
    const index = this.cart.indexOf(ingredient);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  getCartItems() {
    return this.cart;
  }
}
