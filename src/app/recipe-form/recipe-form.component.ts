// src/app/recipe-form/recipe-form.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent {
  recipeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private recipeService: RecipeService) {
    this.recipeForm = this.formBuilder.group({
      name: '',
      description: '',
      image: '',
      ingredients: this.formBuilder.array([this.formBuilder.control('')]),
    });
  }

  addRecipe() {
    const newRecipe = this.recipeForm.value;
    this.recipeService.addRecipe(newRecipe);
    alert('Recipe added successfully');
  }

  addIngredient() {
    const ingredients = this.recipeForm.get('ingredients') as FormArray;
    ingredients.push(this.formBuilder.control(''));
  }

  getIngredientsControls(): AbstractControl[] {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
}
