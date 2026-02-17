import { Link } from "react-router-dom";
import services from "../data/services.json";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";

const Services = () => {

  const ServicePostList = ({ posts }) => {
    return posts.map((post, index) => {
      const isEven = index % 2 === 1;

      return (
        <div
          key={post.slug}
          className={`custom-post-container ${isEven ? "even" : "odd"}`}
        >
          <div
            className={`custom-post-inner ${isEven ? "reverse-layout" : ""}`}
          >
            <div
              className="custom-post-image"
              style={{
                backgroundImage: `url(${post.image})`,
              }}
            />
            <div className="custom-post-text">
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <Link
                to={`/services/${post.slug}`}
                className={isEven ? "secondary-button" : "primary-button"}
              >
                Learn More...
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

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
        <ServicePostList posts={services} />
      </div>
    </>
  );
};

export default Services;
