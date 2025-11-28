import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [ RouterModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
})
export class RecipeList {
  protected readonly recipes = MOCK_RECIPES;
  protected readonly recipe = signal<RecipeModel>(this.recipes[0]);


}
