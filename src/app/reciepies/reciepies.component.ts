import { Component, OnInit } from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-reciepies',
  templateUrl: './reciepies.component.html',
  styleUrls: ['./reciepies.component.css']
})
export class ReciepiesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
