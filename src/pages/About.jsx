import { Link } from "react-router-dom";
import aboutPosts from "../data/aboutPosts.json";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";

const About = () => {

  const AboutPostList = ({ posts }) => {
    return posts.map((post, index) => {
      const isEven = index % 2 === 0;

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
                to={`/about/${post.slug}`}
                className={isEven ? "secondary-button" : "primary-button"}
              >
                Read More...
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
        title="About - Tipu Garden Management"
        description="Learn more about Tipu Garden Management"
        url={window.location.href}
      />

      <PageHeader
        title="About Us"
        image_url="/header-image/tree-path.jpg"
        blurb="Passionate about plants, dedicated to your garden—learn more about our story and what makes us different."
      />

      {/* Static Story Section */}
      <div className="main-container">
        <div className="inner-container">
          <div
            className="image-container"
            style={{
              backgroundImage: `url('/img/teeps-mowing-cropped.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }}
          />
          <div className="text-container">
            <h2>The Story of Tipu Garden Management</h2>
            <p>
              Tipu Gardens began in 2020 during the COVID-19 pandemic...
              (keep your existing story text here)
            </p>
          </div>
        </div>
      </div>

      <div className="about-posts-container">
        <AboutPostList posts={aboutPosts} />
      </div>
    </>
  );
};

export default About;
