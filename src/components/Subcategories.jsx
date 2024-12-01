import { clothes } from "../constants/clothes";
import { Link } from "react-router-dom";

function Subcategories({ gender }) {
  const categoryArray = [];

  const categoryElements = clothes.map((item) => {
    if (item.gender === gender && !categoryArray.includes(item.category)) {
      categoryArray.push(item.category);
      return (
        <Link
          to={`/products?subcategory=${encodeURIComponent(
            item.category
          )}&gender=${encodeURIComponent(gender)}`}
          key={item.category}
        >
          <li
            className="w-full text-md mb-6 px-3 py-1 rounded-md hover:bg-white hover:border hover:border-gray-300 hover:px-[11px] hover:py-[3px] cursor-pointer"
            onClick={() => {
              document.body.style.overflow = "auto";
            }}
          >
            {item.category}
          </li>
        </Link>
      );
    }
  });

  return <ul>{categoryElements}</ul>;
}

export default Subcategories;
