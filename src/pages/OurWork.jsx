import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import ourWork from "../data/ourWork.json";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <>
      <Seo
        title="Our Work - Tipu Garden Management"
        description="Showcasing the beauty we’ve created—explore the gardens and landscapes we’ve brought to life."
        url={window.location.href}
      />

      <PageHeader
        title="Our Work"
        image_url="/header-image/our-work.jpg"
        blurb="Explore the beautiful gardens we've created and see how we transform outdoor spaces."
      />

      <div className="about-posts-container">
        {ourWork.map((post, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={post.id}
              className={`custom-post-container ${
                isEven ? "even bg-green" : "odd bg-white"
              }`}
            >
              <Link
                to={`/our-work/${post.slug}`}
                className={`custom-post-inner ${
                  isEven ? "reverse-layout" : ""
                }`}
              >
                <div className="custom-post-image">
                  <img
                    src={post.images?.after?.[0]}
                    alt={post.title}
                  />
                </div>

                <div className="custom-post-text">
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>

                  <span className="primary-button">
                    View Full Project
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurWork;