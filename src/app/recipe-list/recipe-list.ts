import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { RecipeModel } from '../models';
import { RouterModule } from '@angular/router';
import { RecipeService } from '../services/recipe';
import { RecipeForm } from '../recipe-form/recipe-form';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recipe-list',
  imports: [ RouterModule, RecipeForm, MatButtonModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {
  private readonly recipeService = inject(RecipeService)
  protected  readonly recipes: Signal<RecipeModel[]> = this.recipeService.getRecipes();
  
}
