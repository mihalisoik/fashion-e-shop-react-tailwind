import { useState } from "react";
import Subcategories from "./Subcategories";

function MenuBar({ setOpenMenu }) {
  const [renderMaleCategories, setRenderMaleCategories] = useState(false);
  const [renderFemaleCategories, setRenderFemaleCategories] = useState(false);
  const [renderUnisexCategories, setRenderUnisexCategories] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="ml-auto mr-4 mt-3"
        onClick={() => {
          setOpenMenu((oldValue) => !oldValue);
          document.body.style.overflow = "auto";
        }}
      >
        <img src="src/assets/icons/cancel-icon.svg" alt="cancel-icon" />
      </button>
      <div className="mt-12 lg:mr-auto lg:ml-4">
        <ul onClick={() => setRenderMaleCategories((oldValue) => !oldValue)}>
          <li className="category-container">
            Men
            <button>
              <img
                src="src/assets/icons/arrow-expand.svg"
                alt="arrow"
                className={
                  renderMaleCategories &&
                  "-rotate-90 transition-transform duration-200"
                }
              />
            </button>
          </li>
          {renderMaleCategories && (
            <div>
              <Subcategories key={"male"} gender={"male"} />
            </div>
          )}
        </ul>
        <ul onClick={() => setRenderFemaleCategories((oldValue) => !oldValue)}>
          <li className="category-container">
            Women
            <button>
              <img
                src="src/assets/icons/arrow-expand.svg"
                alt="arrow"
                className={
                  renderFemaleCategories &&
                  "-rotate-90 transition-transform duration-200"
                }
              />
            </button>
          </li>
          {renderFemaleCategories && (
            <div>
              <Subcategories key={"female"} gender={"female"} />
            </div>
          )}
        </ul>
        <ul onClick={() => setRenderUnisexCategories((oldValue) => !oldValue)}>
          <li className="category-container">
            Unisex
            <button>
              <img
                src="src/assets/icons/arrow-expand.svg"
                alt="arrow"
                className={
                  renderUnisexCategories &&
                  "-rotate-90 transition-transform duration-200"
                }
              />
            </button>
          </li>
          {renderUnisexCategories && (
            <div>
              <Subcategories key={"unisex"} gender={"unisex"} />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
