import { clothes } from "../constants/clothes";

function Subcategories({ gender }) {
  const categoryArray = [];

  const categoryElements = clothes.map((item) => {
    if (item.gender === gender && !categoryArray.includes(item.category)) {
      categoryArray.push(item.category);
      return (
        <a href="/order">
          <li
            key={item.category}
            className="w-full text-md mb-6 px-3 py-1 rounded-sm  hover:bg-white cursor-pointer"
          >
            {item.category}
          </li>
        </a>
      );
    }
  });

  return <ul>{categoryElements}</ul>;
}

export default Subcategories;
