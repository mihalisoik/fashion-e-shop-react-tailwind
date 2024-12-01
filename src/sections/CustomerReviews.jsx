<<<<<<< HEAD
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/reviews";

function CustomerReviews() {
  const [renderedReviews, setRenderedReviews] = useState(2);

  function renderMoreReviews() {
    if (renderedReviews + 2 > reviews.length) {
      setRenderedReviews(reviews.length);
    } else {
      setRenderedReviews((oldCount) => oldCount + 2);
    }
  }

  const ReviewElements = reviews.map((review, index) => {
    if (index < renderedReviews) {
      return (
        <ReviewCard
          key={review.name}
          comment={review.comment}
          name={review.name}
        />
      );
    }
  });

  return (
    <section id="reviews" className="w-full bg-[#4A5568] py-20 mt-10">
      <div className="max-container flex flex-col gap-10 justify-center items-center">
        <h2 className="text-4xl text-slate-50 font-primary text-center">
          What Our <span className="text-primary">Customers</span> Say?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-8 lg:w-full">
          {ReviewElements}
        </div>
        {renderedReviews !== reviews.length && (
          <button
            className="text-slate-400 border border-slate-400 py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={renderMoreReviews}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default CustomerReviews;
=======
import { useState } from "react";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants/reviews";

function CustomerReviews() {
  const [renderedReviews, setRenderedReviews] = useState(2);

  function renderMoreReviews() {
    if (renderedReviews + 2 > reviews.length) {
      setRenderedReviews(reviews.length);
    } else {
      setRenderedReviews((oldCount) => oldCount + 2);
    }
  }

  const ReviewElements = reviews.map((review, index) => {
    if (index < renderedReviews) {
      return (
        <ReviewCard
          key={review.name}
          comment={review.comment}
          name={review.name}
        />
      );
    }
  });

  return (
    <section id="reviews" className="w-full bg-[#4A5568] py-20 mt-10">
      <div className="max-container flex flex-col gap-10 justify-center items-center">
        <h2 className="text-4xl text-slate-50 font-primary text-center">
          What Our <span className="text-primary">Customers</span> Say?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-8 lg:w-full">
          {ReviewElements}
        </div>
        {renderedReviews !== reviews.length && (
          <button
            className="text-slate-400 border border-slate-400 py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            onClick={renderMoreReviews}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
}

export default CustomerReviews;
>>>>>>> a825e4238c2a4c9321a49a838ffbc4a811f5bedb
