import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]),
    new Recipe('Pav Bhaji',
      'A flavorful and spicy vegetable mash with Bread rolls',
      'https://i0.wp.com/www.lifeisforfood.com/wp-content/uploads/2021/12/Pav-Bhaji.jpg?w=1080&ssl=1',
      [
        new Ingredient('Pav', 6-8),
        new Ingredient('Potatoes (Boiled and mashed)', 3),
        new Ingredient('Tomatoes (Chopped) ', 3),
        new Ingredient('Onion (Finely chopped)', 1),
        new Ingredient('Green Peas (Boiled)', 1),
        new Ingredient('Capsicum (Finely chopped)', 1),
        new Ingredient('Cauliflower (Boiled and mashed)', 1),
        new Ingredient('Ginger-Garlic Paste ', 1),
        new Ingredient('Pav Bhaji Masala ', 2),
        new Ingredient('Butter ', 3),
        new Ingredient('Lemon ', 1),
        new Ingredient('Coriander leaves (Chopped)',  2),
        new Ingredient('Salt - As per taste', 0),
      ]),
    new Recipe('Paneer Butter Masala',
      'What else you need to say?',
      'https://www.cookwithmanali.com/wp-content/uploads/2019/05/Paneer-Butter-Masala.jpg',
      [
        new Ingredient('Paneer (Cottage cheese, cubed) - 250g', 2),
        new Ingredient('Tomatoes (Pureed) - 3 large', 1),
        new Ingredient('Onion (Finely chopped) - 1 large', 1),
        new Ingredient('Fresh Cream - 1/2 cup', 1),
        new Ingredient('Butter - 2 tbsp', 1),
        new Ingredient('Cashews (Soaked and blended into a paste) - 10-12', 1),
        new Ingredient('Ginger-Garlic Paste - 1 tbsp', 1),
        new Ingredient('Kashmiri Red Chili Powder - 1 tsp', 1),
        new Ingredient('Garam Masala - 1 tsp', 1),
        new Ingredient('Coriander Powder - 1 tsp', 1),
        new Ingredient('Turmeric Powder - 1/2 tsp', 1),
        new Ingredient('Sugar - 1 tsp', 1),
        new Ingredient('Kasuri Methi (Dried Fenugreek Leaves) - 1 tsp', 1),
        new Ingredient('', 1),
      ]),

  ];
  // private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
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
