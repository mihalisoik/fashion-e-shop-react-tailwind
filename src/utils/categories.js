import { clothes } from "../constants/clothes";

const menCategoryArray = [];
const womenCategoryArray = [];

clothes.map((item) => {
  if (item.gender === "male" && !menCategoryArray.includes(item.category)) {
    menCategoryArray.push(item.category);
  }
});
