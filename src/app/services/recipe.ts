import { computed, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RecipeModel } from '../models';
import { MOCK_RECIPES } from '../mock-recipes';
import {
  combineLatest,
  delay,
  map,
  of,
  scan,
  startWith,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  // The single Signal source of truth for the UI
  private readonly recipes: Signal<RecipeModel[]>;

  // Action stream to emit a new recipe object when one is added
  private addRecipeAction$ = new Subject<RecipeModel>();

  constructor() {
    // Stream of recipes from the "API"
    const recipesFromApi$ = of(MOCK_RECIPES).pipe(delay(1000));

    // Stream that accumulates locally added recipes over time
    const newlyAddedRecipes$ = this.addRecipeAction$.pipe(
      scan((acc, recipe) => [...acc, recipe], [] as RecipeModel[])
    );

    // Combined stream of all recipes
    const recipes$ = combineLatest([
      recipesFromApi$.pipe(startWith([])),
      newlyAddedRecipes$.pipe(startWith([])),
    ]).pipe(
      map(([apiRecipes, newlyAdded]) => [...apiRecipes, ...newlyAdded])
    );

    // Assign the final, combined stream to our signal property
    this.recipes = toSignal(recipes$, {
      initialValue: [],
    });
  }

  getRecipes(): Signal<RecipeModel[]> {
    return this.recipes;
  }

  getRecipeById(
    recipeIdSignal: Signal<number>
  ): Signal<RecipeModel | undefined> {
    return computed(() => {
      const id = recipeIdSignal();
      return this.recipes().find(recipe => recipe.id === id);
    });
  }

  addNewRecipe(recipe: { name: string; description: string }) {
    const currentList = this.recipes();
    const lastId =
      currentList.length > 0 ? currentList[currentList.length - 1].id : 0;

    const newRecipe: RecipeModel = {
      id: lastId + 1,
      name: recipe.name,
      description: recipe.description,
      imgUrl: '',
      ingredients: [],
    };

    this.addRecipeAction$.next(newRecipe);
  }
}