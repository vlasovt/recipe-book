import { Injectable } from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from '../shared/ingredient';

@Injectable()
export class RecipeService {

recipes: Recipe[] = [
  new Recipe ('Crepe', 'Delicious crepe',  'assets/images/crepe.jpg', [
    new Ingredient('Flour', 500 ),
    new Ingredient('Milk', 200 )
  ]),
  new Recipe ('Schnitzel', 'Very tasty',  'assets/images/schnitzel.png', [
    new Ingredient('Meat', 200 ),
    new Ingredient('Salt', 50 )
  ]),
];

getRecipes(){
  return this.recipes;
}

  constructor() { }

}