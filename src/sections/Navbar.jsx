import { useState } from "react";
import MenuBar from "./MenuBar";
import { totalQuantity } from "../constants/cart";

function Navbar({ isHomepage }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="h-16 bg-accent px-5 max-sm:px-1 items-center z-10 left-0 right-0 top-0 fixed">
      {openMenu && (
        <div className="fixed w-full -left-1 backdrop-blur-md bg-white/30 z-100 lg:w-96 inset-y-0 overflow-y-auto">
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
        <div className="flex items-center justify-between sm:ml-3">
          <a href="/" className="flex items-center">
            <img
              src="src/assets/logo.png"
              alt="Company Logo"
              width={60}
              className="cursor-pointer mr-auto"
            />
          </a>
          <p className="text-slate-50 text-sm font-primary max-sm:w-40">
            Free shipping for purchases of €50 and above
          </p>
          <div className="flex gap-2 relative bg-accent border-2 p-2 group hover:shadow-md hover:bg-light-accent active:bg-extra-light-accent cursor-pointer">
            <img src="src/assets/icons/cart.svg" alt="Shopping Bag" />
            <p className="text-slate-50 font-primary">
              Shopping Bag ({`${totalQuantity}`})
            </p>
            <div className="absolute top-12 right-1/4 whitespace-nowrap bg-gray-800/60 text-sm text-white py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {`Total cost ${totalQuantity}`}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
