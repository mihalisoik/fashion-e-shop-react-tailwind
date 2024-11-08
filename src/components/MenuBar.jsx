import { useState } from "react";
import Subcategories from "./Subcategories";

function MenuBar({ setOpenMenu }) {
  const [renderMaleCategories, setRenderMaleCategories] = useState(false);
  const [renderFemaleCategories, setRenderFemaleCategories] = useState(false);
  const [renderUnisexCategories, setRenderUnisexCategories] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center font-primary">
      <button
        className="ml-auto mr-4 mt-3"
        onClick={() => {
          setOpenMenu((oldValue) => !oldValue);
          document.body.style.overflow = "auto";
        }}
      >
        <img src="src/assets/icons/cancel-icon.svg" alt="Close Menu" />
      </button>
      <div className="mt-12 lg:mr-auto lg:ml-4">
        <ul>
          <li
            className="category-container"
            onClick={() => setRenderMaleCategories((oldValue) => !oldValue)}
          >
            Men
            <button>
              <img
                src="src/assets/icons/arrow-expand.svg"
                alt="Expand"
                className={
                  renderMaleCategories &&
                  "-rotate-90 transition-transform duration-200"
                }
              />
            </button>
          </li>
          {renderMaleCategories && (
            <div>
              <Subcategories gender={"male"} />
            </div>
          )}
        </ul>
        <ul>
          <li
            className="category-container"
            onClick={() => setRenderFemaleCategories((oldValue) => !oldValue)}
          >
            Women
            <button>
              <img
                src="src/assets/icons/arrow-expand.svg"
                alt="Expand"
                className={
                  renderFemaleCategories &&
                  "-rotate-90 transition-transform duration-200"
                }
              />
            </button>
          </li>
          {renderFemaleCategories && (
            <div>
              <Subcategories gender={"female"} />
            </div>
          )}
        </ul>
        <ul>
          <li
            className="category-container"
            onClick={() => setRenderUnisexCategories((oldValue) => !oldValue)}
          >
            Unisex
            <button>
              <img
                src="src/assets/icons/arrow-expand.svg"
                alt="Expand"
                className={
                  renderUnisexCategories &&
                  "-rotate-90 transition-transform duration-200"
                }
              />
            </button>
          </li>
          {renderUnisexCategories && (
            <div>
              <Subcategories gender={"unisex"} />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
