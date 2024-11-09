import { menCategoryArray } from "../utils/categories";

function CategoryFilter() {
  function GenderCategoryElements(gender) {
    if (gender === "male") {
      return menCategoryArray.map((category) => <div>{category}</div>);
    }
  }

  return (
    <div>
      <div>Men</div>
      <div></div>
    </div>
  );
}

export default CategoryFilter;
