import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is a simply test',
      'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg',
      [
        new Ingredient('Mozzarella', 2),
        new Ingredient('Tomato sauce', 3),
        new Ingredient('Ham', 5),
        new Ingredient('Oregano', 1)
      ]),
    new Recipe('A Test Recipe 2',
      'This is a simply test',
      'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg',
      [
        new Ingredient('Mozzarella', 2),
        new Ingredient('Tomato sauce', 3),
        new Ingredient('Ham', 5),
        new Ingredient('Oregano', 1)
      ]),
    new Recipe('A Test Recipe 3',
      'This is a simply test',
      'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg',
      [
        new Ingredient('Mozzarella', 2),
        new Ingredient('Tomato sauce', 3),
        new Ingredient('Ham', 5),
        new Ingredient('Oregano', 1)
      ]),
    new Recipe('A Test Recipe 4',
      'This is a simply test',
      'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg',
      [
        new Ingredient('Mozzarella', 2),
        new Ingredient('Tomato sauce', 3),
        new Ingredient('Ham', 5),
        new Ingredient('Oregano', 1)
      ])
  ];

  constructor(private shoppingList: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
