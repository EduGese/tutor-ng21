import { RecipeModel } from './../models';
import { Component, computed, input, signal } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss',
})
export class RecipeDetail {
  readonly recipe = input.required<RecipeModel>();
  protected readonly servings = signal<number>(2);
  protected readonly adjustedIngredients = computed(() => {
    const currentRecipe = this.recipe();
    if (!currentRecipe) return [];
    return currentRecipe.ingredients.map(ingredient => {
      return {
        ...ingredient,
        quantity: ingredient.quantity * this.servings() / 2
      }
    })
  })



  protected incrementServigs() {
    this.servings.update(current => current + 1)
  }
  protected decrementServigs() {
    this.servings.update(current => {
      if (current === 2) return current;
      return current - 1;
    })
  }
}
