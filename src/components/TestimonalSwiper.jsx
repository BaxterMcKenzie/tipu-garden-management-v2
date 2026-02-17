import { useRef } from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";

const TestimonialSwiper = ({ testimonials }) => {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div
      className="testimonial-swiper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="secondary-button swiper-button-prev"></button>
      <button className="secondary-button swiper-button-next"></button>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
      >
        {testimonials && testimonials.length > 0 ? (
          testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-slide">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                )}

                <h4 className="testimonial-author">
                  {testimonial.name}
                </h4>

                {testimonial.location && (
                  <p className="testimonial-location">
                    {testimonial.location}
                  </p>
                )}

                <p className="testimonial-content">
                  {testimonial.quote}
                </p>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="testimonial-slide">
              <p>No testimonials available.</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
