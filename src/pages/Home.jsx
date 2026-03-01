import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import TestimonialSwiper from "../components/TestimonalSwiper";
import testimonials from "../data/testimonials.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Seo
        title="Home - Tipu Garden Management"
        description="Welcome to Tipu Garden Management – expert gardening services from Seatoun to Titahi Bay. We specialize in creating and maintaining beautiful, thriving outdoor spaces."
        url={window.location.href}
      />

      <PageHeader
        title="Get a Free Quote Today!"
        image_url="/header-image/front-house.jpg"
      />

      {/* Kia Ora */}
      <div className="main-container">
        <div className="inner-container">
          <div
            className="image-container"
            style={{
              backgroundImage: `url('/img/kia-ora-cropped.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="text-container">
            <h2>Kia Ora, Welcome to Tipu Garden Management</h2>
            <br />
            <p>
              At Tipu Garden Management, we believe that a well-cared-for garden
              isn’t just a space—it’s a sanctuary. Whether you’re dreaming of a
              lush, forest-like retreat, need regular maintenance for your
              outdoor spaces, or want advice on bringing native plants to life,
              we’re here to make it happen.
              <br />
              <br />
              As a family-run business, we pride ourselves on delivering
              friendly, reliable, and personalized service. With over a decade
              of experience, we bring the knowledge and care needed to create
              outdoor spaces that reflect your vision. Whether it’s mowing the
              lawns, designing landscapes, or nurturing gardens to thrive in all
              seasons, we’ll go above and beyond to ensure your satisfaction.
              <br />
              <br />
              Our team is passionate about the beauty and sustainability of
              nature. That’s why we love working with native plants,
              eco-friendly solutions, and designs that not only enhance your
              property but also support local wildlife and the environment.
              <br />
              <br />
              Let us handle the hard work while you enjoy the rewards of a
              beautiful, vibrant garden. Welcome to Tipu Garden Management—where
              your garden dreams grow.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="main-container">
        <div className=".inner-container-services-home">
          <div className="image-grid">
            <div className="service-card">
              <div
                className="image-container"
                style={{
                  backgroundImage: `url('/img/hedges-service-icon.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Link to="/services/hedges-topiaries-services">
                <button className="secondary-button">Hedge Services</button>
              </Link>
            </div>

            <div className="service-card">
              <div
                className="image-container"
                style={{
                  backgroundImage: `url('/img/lawn-care-service-icon.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Link to="/services/lawn-care-services">
                <button className="secondary-button">Lawn Care</button>
              </Link>
            </div>

            <div className="service-card">
              <div
                className="image-container"
                style={{
                  backgroundImage: `url('/img/pest-control-service-icon.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Link to="/services/pest-control-services">
                <button className="secondary-button">Pest Control</button>
              </Link>
            </div>

            <div className="service-card">
              <div
                className="image-container"
                style={{
                  backgroundImage: `url('/img/section-clear-service-icon.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <Link to="/services/section-clearing-services">
                <button className="secondary-button">Section Clear</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Free Quote */}
      <div className="main-container">
        <div className="inner-container">
          <div
            className="image-container"
            style={{
              backgroundImage: `url('/img/rob-teeps-truck-cropped.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="text-container">
            <h2>Free Quote – Make Sure We’re Right for You!</h2>
            <br />
            <p>
              We offer a no-obligation free quote tailored to your needs.
              Whether it’s maintenance, landscaping, or a custom garden project,
              we’ll work with you to make it happen.
            </p>
            <Link to="/contact">
              <button className="primary-button">Contact</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="main-container-testimonal">
        <div className="inner-container-vertical">
          <h2 className="h2-alt">Testimonials</h2>
          <TestimonialSwiper testimonials={testimonials} />
        </div>
      </div>

      {/* Service Area */}
      <div className="main-container">
        <div className="inner-container">
          <div
            className="image-container"
            style={{
              backgroundImage: `url('/img/service-area.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="text-container">
            <h2>Service Area</h2>
            <br />
            <p>
              Our main service area covers from Seatoun to Titahi Bay. If you're
              just outside these boundaries, please get in touch — we’ll do our
              best to accommodate you.
            </p>
            <Link to="/contact">
              <button className="primary-button">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
