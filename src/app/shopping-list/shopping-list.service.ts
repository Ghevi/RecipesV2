import { EventEmitter } from '@angular/core';

import { Ingredient } from './ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Pasta', 1),
    new Ingredient('Sugo al pomodoro', 5),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }

    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
