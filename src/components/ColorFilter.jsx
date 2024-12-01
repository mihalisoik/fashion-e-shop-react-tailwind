<<<<<<< HEAD
import { clothes } from "../constants/clothes";

function ColorFilter({ filters, addFilter, removeFilter }) {
  const colorArray = [];

  clothes.map((item) => colorArray.push(item.color));

  const flattenedColorArray = colorArray.flat();
  const uniqueColorArray = [...new Set(flattenedColorArray)];

  function controlFilters(color) {
    if (filters.includes(`Color: ${color}`)) {
      removeFilter(`Color: ${color}`);
    } else {
      addFilter(`Color: ${color}`);
    }
  }

  const colorElements = uniqueColorArray.map((color, index) => {
    return (
      <div
        key={index}
        style={{ backgroundColor: color }}
        className={`border-2 border-gray-200 p-1 w-12 h-12 cursor-pointer ${
          filters.includes(`Color: ${color}`) &&
          "outline outline-2 outline-black"
        }`}
        onClick={() => controlFilters(color)}
      ></div>
    );
  });

  return (
    <div>
      <h3 className="font-bold">Color</h3>
      <div className="grid grid-cols-6 md:grid-cols-4 gap-2 max-md:mt-5">
        {colorElements}
      </div>
    </div>
  );
}

export default ColorFilter;
=======
import { clothes } from "../constants/clothes";

function ColorFilter({ filters, addFilter, removeFilter }) {
  const colorArray = [];

  clothes.map((item) => colorArray.push(item.color));

  const flattenedColorArray = colorArray.flat();
  const uniqueColorArray = [...new Set(flattenedColorArray)];

  function controlFilters(color) {
    if (filters.includes(`Color: ${color}`)) {
      removeFilter(`Color: ${color}`);
    } else {
      addFilter(`Color: ${color}`);
    }
  }

  const colorElements = uniqueColorArray.map((color, index) => {
    return (
      <div
        key={index}
        style={{ backgroundColor: color }}
        className={`border-2 border-gray-200 p-1 w-12 h-12 cursor-pointer ${
          filters.includes(`Color: ${color}`) &&
          "outline outline-2 outline-black"
        }`}
        onClick={() => controlFilters(color)}
      ></div>
    );
  });

  return (
    <div>
      <h3 className="font-bold">Color</h3>
      <div className="grid grid-cols-6 md:grid-cols-4 gap-2 max-md:mt-5">
        {colorElements}
      </div>
    </div>
  );
}

export default ColorFilter;
>>>>>>> a825e4238c2a4c9321a49a838ffbc4a811f5bedb
