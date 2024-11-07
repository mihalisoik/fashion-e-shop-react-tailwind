import { useState } from "react"

function Navbar() {

  const [renderTooltip,setRenderTooltip] = useState(false)

  function animatedTooltip() {
    setRenderTooltip(true)
    setTimeout(()=>{
      setRenderTooltip(false)
    },2500)
  }

  return (
    <nav className="px-5 max-sm:px-1 bg-accent fixed left-0 right-0 top-0 h-16 z-10 grid grid-cols-[auto,1fr] items-center">
      <button onClick={animatedTooltip}>
        yes
      </button>
      <img src="src/assets/icons/menu.svg" alt="menu-icon"/>
      <div className='flex items-center justify-between sm:ml-3'>
      <a href="index.html" className="flex items-center">
        <img 
        src="src/assets/logo.png" 
        alt="logo"
        width={60}
        className="cursor-pointer mr-auto"
        />
      </a>
       <p className='text-slate-50 text-sm font-primary max-sm:w-40'>
        Free shipping for purchases of €50 and above
        </p>
       <div className="flex gap-0.5 relative">
          <p>Your Cart: </p>
          <img src="src/assets/icons/cart.svg" alt="cart" />
          {renderTooltip && <div className="absolute top-7 right-0 whitespace-nowrap bg-gray-300/60 text-sm py-1 px-3 rounded-md goupstyle">
            Added to Cart
          </div>}
       </div>
      </div>
    </nav>
    
  )
}

export default Navbar