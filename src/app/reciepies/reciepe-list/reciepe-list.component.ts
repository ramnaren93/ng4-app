import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-reciepe-list',
  templateUrl: './reciepe-list.component.html',
  styleUrls: ['./reciepe-list.component.css']
})
export class ReciepeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Test', 'This is a test recipe', 'http://www.soupsecrets.net/gallery/cabbage-soup-recipes/two-amazing-cabbage-soup-recipes.jpg'),
    new Recipe('Another Test', 'This is another test recipe', 'http://www.soupsecrets.net/gallery/cabbage-soup-recipes/two-amazing-cabbage-soup-recipes.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
