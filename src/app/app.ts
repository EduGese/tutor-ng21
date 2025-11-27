import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly recipes = MOCK_RECIPES;
  protected readonly title = signal<string>('My recipe Box');
  protected readonly recipe = signal<RecipeModel>(this.recipes[0]);
  protected readonly servings = signal<number>(2);
  protected readonly adjustedIngredients = computed(()=>{
   return this.recipe().ingredients.map(ingredient=>{
    return{
      ...ingredient,
      quantity: ingredient.quantity*this.servings()/2
    }
   })
  })

  protected setRecipeDinamically(recipe: RecipeModel){
    this.recipe.set(recipe)
  }

  protected incrementServigs(){
    this.servings.update(current=> current +1 )
  }
    protected decrementServigs(){
    this.servings.update(current=>{
      if(current=== 2) return current ;
      return current -1;
    } )
  }
}


