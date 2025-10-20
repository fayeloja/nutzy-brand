import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import recipes from "../data/recipes";
import { Link } from "react-router-dom";

function RecipesCarousel() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-center text-4xl md:text-7xl mb-5 md:mb-20 text-accent-red">
        NUTZY RECIPES
      </h1>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {recipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Link to={`/recipes/${recipe.slug}`}>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <h3 className="font-stretch-extra-expandedbold uppercase p-4">
                  {recipe.title}
                </h3>
                <p className="text-sm text-accent-red px-4 pb-4">
                  {recipe.date}
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default RecipesCarousel;
