import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecipeModel } from './../models';
import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.scss',
})
export class RecipeDetail implements OnInit{
   protected readonly recipe = signal<RecipeModel | undefined>(undefined);
  
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

  constructor(private route: ActivatedRoute){}

 ngOnInit(): void {
   const recipeIdParam = this.route.snapshot.paramMap.get('id');
   const recipeId = recipeIdParam ? +recipeIdParam : null;
   console.log("recipe Id:" , recipeId)

   if (recipeId !== null) {
     const foundRecipe = MOCK_RECIPES.find(r => r.id === recipeId);
     this.recipe.set(foundRecipe);
   }
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
}
