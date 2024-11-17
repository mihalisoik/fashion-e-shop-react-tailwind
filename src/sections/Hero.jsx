function Hero() {
  return (
    <section id="home" className="md:mt-24 mt-10 relative max-container">
      <div className="sm:w-full w-auto h-[50rem] md:h-[40rem] sm:h-[30rem bg-contain bg-no-repeat bg-hero bg-right flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col items-center sm:items-start gap-y-4">
          <h1 className="text-[2.5rem] p-6 sm:p-3 sm:text-[3.5rem] text-text-color font-bold bg-background rounded-xl inline-block max-w-[90%] font-primary">
            <span className="text-accent">Elevate</span> Your Everyday Style!
          </h1>
          <p className="font-secondary w-96 sm:w-full md:w-[40rem] leading-5 tracking-widest text-slate-700 bg-background p-4 rounded-xl">
            Discover a collection curated for trendsetters and timeless fashion
            lovers alike. From statement pieces to everyday essentials, our
            e-shop brings you quality, comfort, and style all in one place. With
            new arrivals every week, you’re bound to find something that fits
            just right. Step up your wardrobe and shop the looks you’ll love!
          </p>
          <a href="/products">
            <button className="main-button main-button-hover flex gap-3 pr-6">
              <p>Shop Now</p>
              <img
                src="src/assets/icons/arrow-forward.svg"
                alt="Arrow Forward"
                className=""
              />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
