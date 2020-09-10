import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping-list/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Un piatto gustoso ricco di carboidrati',
      'https://cdn.cook.stbm.it/thumbnails/ricette/142/142699/hd750x421.jpg',
      [new Ingredient('Pasta', 1), new Ingredient('Salsa', 1)]
    ),
    new Recipe(
      'Tagliata di controfiletto',
      'Tagliata di manzo di prima qualità',
      'https://static.cookist.it/wp-content/uploads/sites/21/2018/09/tagliata-di-manzo-segreti.jpg',
      [new Ingredient('Carne', 2), new Ingredient('Sale', 1)]
    ),
    new Recipe(
      'Patate fritte',
      'Semplici ma immancabili patate fritte',
      'https://www.salepepe.it/files/2014/03/come-fare-patate-fritte_05.jpg',
      [new Ingredient('Patate', 1), new Ingredient('Olio', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
