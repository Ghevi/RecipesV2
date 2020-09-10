import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private slSevice: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    this.slSevice.addIngredient(newIngredient);
  }
}
