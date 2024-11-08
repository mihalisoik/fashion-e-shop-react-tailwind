import { clothes } from "../constants/clothes";

function Subcategories({ gender }) {
  const categoryArray = [];

  const categoryElements = clothes.map((item) => {
    if (item.gender === gender && !categoryArray.includes(item.category)) {
      categoryArray.push(item.category);
      return (
        <li
          key={item.category}
          className="w-full text-md mb-6 px-3 py-1 rounded-sm  hover:bg-white cursor-pointer"
        >
          <a href="/order">{item.category}</a>
        </li>
      );
    }
  });

  return <ul>{categoryElements}</ul>;
}

export default Subcategories;
