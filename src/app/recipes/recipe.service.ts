import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is a simply test',
      'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg'),
    new Recipe('A Test Recipe 2', 'This is a simply test',
      'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg'),
    new Recipe('A Test Recipe 3', 'This is a simply test',
      'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg'),
    new Recipe('A Test Recipe 4', 'This is a simply test',
      'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg')
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
