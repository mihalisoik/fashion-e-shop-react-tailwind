function Nav() {

  return (
    <div className='flex items-center justify-between py-2 px-9 bg-accent fixed left-0 right-0 top-0 h-16 z-10'>
      <img 
      src="src/assets/logo.png" 
      alt="logo"
      width={60}
      className="cursor-pointer"
       />
       <p className='text-slate-50 text-xl'>
        Free shipping for purchases of €50 and above
        </p>
       <div>
        allagh glwssas
        search button
        cart
       </div>
    </div>
  )
}

export default Nav