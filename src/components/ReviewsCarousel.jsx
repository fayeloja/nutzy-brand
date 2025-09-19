import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import reviews from "../data/reviews";

function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="w-full bg-cover bg-center py-20 lazyload relative mt-20"
      style={{
        backgroundImage: "url('./review-bg-min.png')", // replace with your Nutzy image path
      }}
    >
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Review Card */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center transition-all duration-500">
          <p className="italic mb-4">"{reviews[current].text}"</p>
          <h3 className="font-bold uppercase">{reviews[current].name}</h3>
          <p className="text-sm text-accent-red">{reviews[current].date}</p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-hover-primary/80 p-2 rounded-full shadow hover:bg-hover-primary text-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-hover-primary/80 p-2 rounded-full shadow hover:bg-hover-primary text-white"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-primary" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsCarousel;
