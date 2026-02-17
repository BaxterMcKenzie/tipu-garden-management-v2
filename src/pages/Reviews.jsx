import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import TestimonialSwiper from "../components/TestimonalSwiper";
import testimonials from "../data/testimonials.json";

const Reviews = () => {
  return (
    <>
      <Seo
        title="Reviews - Tipu Garden Management"
        description="Hear what our happy clients have to say about Tipu Garden Management."
        url={window.location.href}
      />

      <PageHeader
        title="Reviews"
        image_url="/header-image/reviews.jpg"
        blurb="Hear what our happy clients have to say—real feedback from those who’ve trusted us with their gardens."
      />

      <div className="main-container-testimonal">
        <div className="inner-container-vertical">
          <h2 className="h2-alt">Testimonials</h2>
          <TestimonialSwiper testimonials={testimonials} />
        </div>
      </div>
    </>
  );
};

export default Reviews;
