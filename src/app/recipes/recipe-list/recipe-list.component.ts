import { Component, OnInit } from '@angular/core';

import { Recipe } from './../../model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Un piatto gustoso ricco di carboidrati',
      'https://cdn.cook.stbm.it/thumbnails/ricette/142/142699/hd750x421.jpg'
    ),
    new Recipe(
      'Tagliata di controfiletto',
      'Tagliata di manzo di prima qualità',
      'https://static.cookist.it/wp-content/uploads/sites/21/2018/09/tagliata-di-manzo-segreti.jpg'
    ),
    new Recipe(
      'Patate fritte',
      'Semplici ma immancabili patate fritte',
      'https://www.salepepe.it/files/2014/03/come-fare-patate-fritte_05.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
