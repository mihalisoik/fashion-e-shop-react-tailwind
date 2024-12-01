import { useState } from "react";
import Subcategories from "../components/Subcategories";

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
        <img src="/icons/grey-cancel-icon.svg" alt="Close Menu" />
      </button>
      <div className="mt-12">
        <ul>
          <li
            className="category-container"
            onClick={() => setRenderMaleCategories((oldValue) => !oldValue)}
          >
            Men
            <button>
              <img
                src="/icons/arrow-expand.svg"
                alt="Expand Subcategories"
                className={
                  renderMaleCategories &&
                  "-rotate-90 transition-transform duration-200"
                }
              />
            </button>
          </li>
          {renderMaleCategories && (
            <div>
              <Subcategories gender={"Men"} />
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
                src="/icons/arrow-expand.svg"
                alt="Expand Subcategories"
                className={
                  renderFemaleCategories &&
                  "-rotate-90 transition-transform duration-200"
                }
              />
            </button>
          </li>
          {renderFemaleCategories && (
            <div>
              <Subcategories gender={"Women"} />
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
                src="/icons/arrow-expand.svg"
                alt="Expand Subcategories"
                className={
                  renderUnisexCategories &&
                  "-rotate-90 transition-transform duration-200"
                }
              />
            </button>
          </li>
          {renderUnisexCategories && (
            <div>
              <Subcategories gender={"Unisex"} />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
