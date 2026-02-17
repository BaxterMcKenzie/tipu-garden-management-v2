import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import TestimonialSwiper from "../components/TestimonalSwiper";
import { Link } from "react-router-dom";

const Home = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      content:
        "Tipu Garden Management completely transformed our backyard. Professional, friendly, and incredible attention to detail!",
    },
    {
      id: 2,
      name: "James T.",
      content:
        "Reliable, hardworking, and knowledgeable. Our garden has never looked better!",
    },
    {
      id: 3,
      name: "Emma R.",
      content:
        "Fantastic service from start to finish. Highly recommend for anyone wanting a beautiful outdoor space.",
    },
  ];

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
              lush retreat, need regular maintenance, or want advice on native
              plants, we’re here to make it happen.
              <br /><br />
              As a family-run business, we pride ourselves on delivering
              friendly, reliable, and personalized service. With over a decade
              of experience, we bring the knowledge and care needed to create
              outdoor spaces that reflect your vision.
              <br /><br />
              Let us handle the hard work while you enjoy the rewards of a
              beautiful, vibrant garden.
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
                <button className="secondary-button">
                  Hedge Services
                </button>
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
                <button className="secondary-button">
                  Lawn Care
                </button>
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
                <button className="secondary-button">
                  Pest Control
                </button>
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
                <button className="secondary-button">
                  Section Clear
                </button>
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
              Whether it’s maintenance, landscaping, or a custom garden
              project, we’ll work with you to make it happen.
            </p>
            <Link to="/contact">
              <button className="primary-button">
                Contact
              </button>
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
              Our main service area covers from Seatoun to Titahi Bay.
              If you're just outside these boundaries, please get in touch —
              we’ll do our best to accommodate you.
            </p>
            <Link to="/contact">
              <button className="primary-button">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
