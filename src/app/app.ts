import { Component, signal } from '@angular/core';
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
  protected readonly title = signal<string>('My recipe Box');
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected readonly servings = signal<number>(0);

  protected setRecipe1() {
    this.recipe.set(MOCK_RECIPES[0]);
  }
   protected setRecipe2() {
    this.recipe.set(MOCK_RECIPES[1]);
  }

  protected incrementServigs(){
    this.servings.update(current=> current +1 )
  }
    protected decrementServigs(){
    this.servings.update(current=>{
      if(current=== 0) return current ;
      return current -1;
    } )
  }
}


