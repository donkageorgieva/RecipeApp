import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', { static: false }) nameElement: ElementRef;
  @ViewChild('amountInput', { static: false }) amountElement: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  onAddIngredient() {
    console.log(typeof this.nameElement);
    this.newIngredient.emit(
      new Ingredient(
        this.nameElement.nativeElement.value,
        this.amountElement.nativeElement.value
      )
    );
  }
}
