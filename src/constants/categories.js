<<<<<<< HEAD
import { clothes } from "./clothes";

export const menCategoryArray = [];
export const womenCategoryArray = [];
export const unisexCategoryArray = [];

clothes.map((item) => {
  if (item.gender === "Men" && !menCategoryArray.includes(item.category)) {
    menCategoryArray.push(item.category);
  }

  if (item.gender === "Women" && !womenCategoryArray.includes(item.category)) {
    womenCategoryArray.push(item.category);
  }

  if (
    item.gender === "Unisex" &&
    !unisexCategoryArray.includes(item.category)
  ) {
    unisexCategoryArray.push(item.category);
  }
});
=======
import { clothes } from "./clothes";

export const menCategoryArray = [];
export const womenCategoryArray = [];
export const unisexCategoryArray = [];

clothes.map((item) => {
  if (item.gender === "Men" && !menCategoryArray.includes(item.category)) {
    menCategoryArray.push(item.category);
  }

  if (item.gender === "Women" && !womenCategoryArray.includes(item.category)) {
    womenCategoryArray.push(item.category);
  }

  if (
    item.gender === "Unisex" &&
    !unisexCategoryArray.includes(item.category)
  ) {
    unisexCategoryArray.push(item.category);
  }
});
>>>>>>> a825e4238c2a4c9321a49a838ffbc4a811f5bedb
