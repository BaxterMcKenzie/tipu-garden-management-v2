import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import ourWork from "../data/ourWork.json";

const OurWork = () => {
  const getExcerpt = (text, wordLimit = 30) => {
    const words = text.split(/\s+/);
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

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
              key={post.slug}
              className={`custom-post-container ${
                isEven ? "even" : "odd"
              }`}
            >
              <div
                className={`custom-post-inner ${
                  isEven ? "reverse-layout" : ""
                }`}
              >
                <div
                  className="custom-post-image"
                  style={{
                    backgroundImage: `url(${post.image})`,
                  }}
                />
                <div className="custom-post-text">
                  <h2>{post.title}</h2>
                  <p>{getExcerpt(post.excerpt || post.content)}</p>
                  <Link
                    to={`/our-work/${post.slug}`}
                    className={
                      isEven ? "secondary-button" : "primary-button"
                    }
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OurWork;
