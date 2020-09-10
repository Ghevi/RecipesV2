import { Ingredient } from '../shopping-list/ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {}
}

// export class Recipe {
//   public name: string;
//   public description: string;
//   public imagePath: string;

//   constructor(name: string, desc: string, imgPath: string) {
//     this.name = name;
//     this.description = desc;
//     this.imagePath = imgPath;
//   }
// }
