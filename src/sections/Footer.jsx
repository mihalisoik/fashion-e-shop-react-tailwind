function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-container text-white py-10 max-sm:px-5 sm:px-10 flex flex-col lg:flex-row gap-4">
        <div>
          logo here
          <p className="font-secondary italic lg:max-w-[50rem]">
            Thank you for shopping with us! We’re committed to quality products,
            fast shipping, and excellent customer service. Need assistance? Our
            support team is here to help.Follow us on social media for the
            latest updates, discounts, and more. Happy shopping!
          </p>
        </div>
        <div className="flex flex-row justify-between max-lg:max-w-60 lg:ml-auto lg:flex-col lg:gap-5">
          <img
            src="src/assets/icons/facebook.svg"
            alt="facebook"
            className="bg-white w-10 h-10 rounded-full p-1 cursor-pointer"
          />
          <img
            src="src/assets/icons/instagram.svg"
            alt="instagram"
            className="bg-white w-10 h-10 rounded-full p-1 cursor-pointer"
          />
          <img
            src="src/assets/icons/twitter.svg"
            alt="twitter"
            className="bg-white w-10 h-10 rounded-full p-1 cursor-pointer"
          />
        </div>
        <div className="text-3xl lg:px-10">
          Get in touch
          <div className="text-base mt-3 hover:text-gray-500 cursor-pointer">
            mihalisoik@gmail.com
          </div>
          <div className="text-base mt-1 hover:text-gray-500 cursor-pointer">
            +30 1234567891
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
