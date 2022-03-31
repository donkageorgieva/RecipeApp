import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeDetails = new EventEmitter<void>();
  displayRecipe: boolean = false;
  onDisplayDetails() {
    this.recipeDetails.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
