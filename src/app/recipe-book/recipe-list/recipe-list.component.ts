import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is a simply test', 'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg'),
    new Recipe('A Test Recipe 2', 'This is a simply test', 'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg'),
    new Recipe('A Test Recipe 3', 'This is a simply test', 'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg'),
    new Recipe('A Test Recipe 4', 'This is a simply test', 'https://www.unapizza.es/sites/default/files/styles/receta_full/public/pizza-funghi.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
