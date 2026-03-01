import aboutPosts from "../data/aboutPosts.json";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";

const About = () => {

  const AboutPostList = ({ posts }) => {
    return posts.map((post, index) => {
      const isEven = index % 2 === 0;

      return (
        <div
          key={post.id}
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
              <p>{post.content || post.description}</p>
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

      <div className="about-posts-container">
        <AboutPostList posts={aboutPosts} />
      </div>
    </>
  );
};

export default About;