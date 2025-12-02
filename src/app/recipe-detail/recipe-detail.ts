import { RecipeService } from './../services/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeModel } from './../models';
import { Component, computed, inject, Signal, signal } from '@angular/core';


@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss',
})
export class RecipeDetail {
  private readonly recipeService = inject(RecipeService);
  private readonly route = inject(ActivatedRoute);

  private readonly recipeId = signal<number>(0);
  protected readonly recipe: Signal<RecipeModel | undefined>;

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

  constructor() {

    this.recipe = this.recipeService.getRecipeById(this.recipeId);
  }

  ngOnInit(): void {
   this.loadRecipe();

  }


  protected incrementServigs() {
    this.servings.update(current => current + 1)
  }
  protected decrementServigs() {
    this.servings.update(current => {
      if (current === 2) return current;
      return current - 1;
    })
  }

 private loadRecipe(){
   const recipeIdParam = this.route.snapshot.paramMap.get('id');
    const recipeId = recipeIdParam ? +recipeIdParam : 0;
    this.recipeId.set(recipeId);
 }  
}
