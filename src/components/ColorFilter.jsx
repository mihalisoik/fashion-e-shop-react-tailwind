import { clothes } from "../constants/clothes";

function ColorFilter({ filters, addFilter, removeFilter }) {
  const colorArray = [];

  clothes.map((item) => colorArray.push(item.color));

  const flattenedColorArray = colorArray.flat();
  const uniqueColorArray = [...new Set(flattenedColorArray)];

  function controlFilters(color) {
    if (filters.includes(color)) {
      removeFilter(color);
    } else {
      addFilter(color);
    }
  }

  const colorElements = uniqueColorArray.map((color, index) => {
    return (
      <div
        key={index}
        style={{ backgroundColor: color }}
        className={`border-[1px] border-white outline outline-2 outline-gray-200 p-1 w-12 h-12 cursor-pointer ${
          filters.includes(color) && "outline-black"
        }`}
        onClick={() => controlFilters(color)}
      ></div>
    );
  });

  return (
    <div>
      <h3 className="font-bold">Color</h3>
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-4">
        {colorElements}
      </div>
    </div>
  );
}

export default ColorFilter;
