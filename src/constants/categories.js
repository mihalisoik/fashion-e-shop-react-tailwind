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
