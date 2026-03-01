import services from "../data/services.json";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";

const Services = () => {
  return (
    <>
      <Seo
        title="Services - Tipu Garden Management"
        description="Discover the wide range of services we offer to help bring your garden to life."
        url={window.location.href}
      />

      <PageHeader
        title="Our Services"
        image_url="/header-image/services.jpg"
        blurb="Transforming gardens, one project at a time—tailored care, expert landscaping, and maintenance to bring your outdoor vision to life."
      />

      <div className="about-posts-container">
        {services.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              className={`custom-post-container ${isEven ? "even" : "odd"}`}
            >
              <div
                className={`custom-post-inner ${
                  isEven ? "reverse-layout" : ""
                }`}
              >
                <div
                  className="custom-post-image"
                  style={{
                    backgroundImage: `url(${service.image})`,
                  }}
                />

                <div className="custom-post-text">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Services;