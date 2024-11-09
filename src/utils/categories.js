import { clothes } from "../constants/clothes";

export const menCategoryArray = [];
export const womenCategoryArray = [];
export const unisexCategoryArray = [];

clothes.map((item) => {
  if (item.gender === "male" && !menCategoryArray.includes(item.category)) {
    menCategoryArray.push(item.category);
  }

  if (item.gender === "female" && !womenCategoryArray.includes(item.category)) {
    womenCategoryArray.push(item.category);
  }

  if (
    item.gender === "unisex" &&
    !unisexCategoryArray.includes(item.category)
  ) {
    unisexCategoryArray.push(item.category);
  }
});
