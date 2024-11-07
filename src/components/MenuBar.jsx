function MenuBar() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <button className="ml-auto mr-4 mt-3">
        <img src="src/assets/icons/cancel-icon.svg" alt="cancel-icon" />
      </button>
      <div className='mt-12 lg:mr-auto lg:ml-4'>
        <div className="filter-container">
          Men
          <button>
           <img src="src/assets/icons/arrow-expand.svg" alt="arrow" />
          </button>  
        </div>
        <div className="filter-container">
          Women
          <button>
           <img src="src/assets/icons/arrow-expand.svg" alt="arrow" />
          </button>
        </div>
        <div className="filter-container">
          Unisex
          <button>
           <img src="src/assets/icons/arrow-expand.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuBar