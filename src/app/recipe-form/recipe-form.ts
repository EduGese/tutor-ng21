
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../services/recipe';

@Component({
  selector: 'app-recipe-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recipe-form.html',
  styleUrl: './recipe-form.scss'
})
export class RecipeForm {
  recipeForm: FormGroup;
  private readonly recipeService = inject(RecipeService)

  constructor(private fb: FormBuilder) {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    if (this.recipeForm.valid) {
      this.recipeService.addNewRecipe(this.recipeForm.value);
      this.recipeForm.reset();
    }
    
  }
}