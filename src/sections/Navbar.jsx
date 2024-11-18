import { useState } from "react";
import MenuBar from "./MenuBar";

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
            Free shipping for purchases of €50 and above
          </p>
          <div className="flex gap-2 justify-center items-center relative bg-accent border-2 p-2 hover:shadow-md hover:bg-light-accent active:bg-extra-light-accent cursor-pointer whitespace-nowrap">
            {renderAddedTooltip && (
              <div className="absolute top-28 whitespace-nowrap bg-gray-800/60 text-sm text-white py-1 px-3 rounded-md z-20 go-up">
                Added
              </div>
            )}
            {renderRemovedTooltip && (
              <div className="absolute top-14 whitespace-nowrap bg-gray-800/60 text-sm text-white py-1 px-3 rounded-md z-20 go-down">
                Removed
              </div>
            )}
            <img src="src/assets/icons/cart.svg" alt="Shopping Bag" />
            <p className="text-slate-50 font-primary text-sm">
              Shopping Bag ({`${renderTotalQuantity}`})
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
