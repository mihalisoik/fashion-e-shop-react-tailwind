import { clothes } from "../constants/clothes";

function ColorFilter() {
  const colorArray = [];

  clothes.map((item) => colorArray.push(item.color));

  const flattenedColorArray = colorArray.flat();

  const uniqueColorArray = [...new Set(flattenedColorArray)];

  const colorElements = uniqueColorArray.map((color) => {
    return (
      <div
        style={{ backgroundColor: color }}
        className="border-[1px] border-white outline outline-2 outline-gray-200 p-1 w-12 h-12 cursor-pointer"
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
