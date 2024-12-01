<<<<<<< HEAD
function ReviewCard({ comment, name }) {
  return (
    <div className="shadow-xl flex flex-col justify-center items-center text-slate-50 py-5 px-10 w-50 gap-2 lg:flex-row">
      <div>
        <img
          src="/icons/profile-pic.svg"
          alt="Profile Picture"
          className="w-32"
        />
      </div>
      <div className="flex flex-col lg:flex-col-reverse justify-center items-center lg:items-start lg:gap-6 gap-1 w-full">
        <p className="w-60 lg:w-full font-secondary italic">"{comment}"</p>
        <h3 className="font-bold tracking-wide font-secondary">{name}</h3>
      </div>
    </div>
  );
}

export default ReviewCard;
=======
function ReviewCard({ comment, name }) {
  return (
    <div className="shadow-xl flex flex-col justify-center items-center text-slate-50 py-5 px-10 w-50 gap-2 lg:flex-row">
      <div>
        <img
          src="/icons/profile-pic.svg"
          alt="Profile Picture"
          className="w-32"
        />
      </div>
      <div className="flex flex-col lg:flex-col-reverse justify-center items-center lg:items-start lg:gap-6 gap-1 w-full">
        <p className="w-60 lg:w-full font-secondary italic">"{comment}"</p>
        <h3 className="font-bold tracking-wide font-secondary">{name}</h3>
      </div>
    </div>
  );
}

export default ReviewCard;
>>>>>>> a825e4238c2a4c9321a49a838ffbc4a811f5bedb
