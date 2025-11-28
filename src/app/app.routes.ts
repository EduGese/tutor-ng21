import { Routes } from '@angular/router';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { RecipeList } from './recipe-list/recipe-list';

export const routes: Routes = [
    { path: '', component: RecipeList},
    { path: 'recipes/:id', component: RecipeDetail }
];
