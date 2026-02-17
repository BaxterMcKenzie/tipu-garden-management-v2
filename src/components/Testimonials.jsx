import testimonials from "../data/testimonials.json";
import TestimonialSwiper from "./TestimonialSwiper";

const Testimonials = () => {
  return (
    <TestimonialSwiper testimonials={testimonials} />
  );
};

export default Testimonials;
