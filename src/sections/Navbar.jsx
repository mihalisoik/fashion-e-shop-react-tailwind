import { useState } from "react";
import MenuBar from "./MenuBar";
import FavoriteProducts from "./FavoriteProducts";

function Navbar({
  isHomepage,
  renderAddedTooltip,
  renderRemovedTooltip,
  renderTotalQuantity,
}) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="h-16 bg-accent px-3 items-center z-30 w-full top-0 fixed">
      {openMenu && (
        <div className="p-2 fixed w-full left-0 backdrop-blur-md bg-white/30 z-20 lg:w-96 inset-y-0 overflow-y-auto">
          <MenuBar setOpenMenu={setOpenMenu} />
        </div>
      )}
      <div className={`  ${isHomepage && "grid grid-cols-[auto,1fr]"}`}>
        {isHomepage && (
          <button
            onClick={() => {
              setOpenMenu((oldValue) => !oldValue);
              document.body.style.overflow = "hidden";
            }}
          >
            <img src="src/assets/icons/menu.svg" alt="Open Menu" />
          </button>
        )}
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="src/assets/logo.png"
              alt="Company Logo"
              width={60}
              className="cursor-pointer mr-auto"
            />
          </a>
          <p className="text-slate-50 text-xs font-primary max-sm:w-40">
            Free shipping for purchases of €70 and above
          </p>
          <div className="flex justify-center items-center gap-2 font-secondary">
            <button className="border-2 border-white p-1 shadow-lg hover:bg-light-accent active:bg-extra-light-accent relative group">
              <img
                src="src/assets/icons/show-favorite.svg"
                alt="Show Favorites"
                width={30}
              />
              <p className="absolute bg-gray-400/80 px-2 py-1 text-white top-12 -left-2 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap rounded-md text-sm">
                Show Favorites
              </p>
              <div className="absolute -left-96 pointer-events-none">
                <FavoriteProducts />
              </div>
            </button>
            <button className="flex gap-2 justify-center items-center relative bg-accent border-2 p-2 hover:shadow-md hover:bg-light-accent active:bg-extra-light-accent whitespace-nowrap group">
              {renderAddedTooltip && (
                <p className="absolute top-28 whitespace-nowrap bg-gray-800/60 text-sm text-white py-1 px-3 rounded-md z-20 go-up">
                  Added
                </p>
              )}
              {renderRemovedTooltip && (
                <p className="absolute top-14 whitespace-nowrap bg-gray-800/60 text-sm text-white py-1 px-3 rounded-md z-20 go-down">
                  Removed
                </p>
              )}
              <p className="absolute bg-gray-400/80 px-2 py-1 text-white top-12 left-5 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap rounded-md text-sm">
                totalCost
              </p>
              <img src="src/assets/icons/cart.svg" alt="Shopping Bag" />
              <p className="text-slate-50 font-primary text-sm">
                Shopping Bag ({`${renderTotalQuantity}`})
              </p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
