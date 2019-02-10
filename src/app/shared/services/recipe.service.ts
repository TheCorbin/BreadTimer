import { Recipe } from '../models/recipe.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  currentRecipe: Recipe;

  sampleRecipe: Recipe = {
    title: 'White Bread With Poolish',
    components: [
      {
        orderId: 0,
        title: 'mix pre-ferment',
        duration: 10,
        expandable: true
      },
      {
        orderId: 1,
        title: 'Let Rise Overnight',
        duration: 200,
        expandable: true
      },
      {
        orderId: 2,
        title: 'mix final dough',
        duration: 10000,
        expandable: true
      }
    ]
  };

  constructor() { }

  getRecipe(): Recipe {
    this.currentRecipe = this.sampleRecipe;
    return this.currentRecipe;
  }

}
