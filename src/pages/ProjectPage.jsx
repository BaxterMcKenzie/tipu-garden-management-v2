import { useParams } from "react-router-dom";
import ourWork from "../data/ourWork.json";

const ProjectPage = () => {
  const { slug } = useParams();

  const project = ourWork.find(p => p.slug === slug);

  if (!project) return <p>Project not found</p>;

  return (
    <div className="project-page">

      {/* Hero */}
      <div className="project-hero">
        <img src={project.images.after?.[0]} alt={project.title} />
        <h1>{project.title}</h1>
      </div>

      {/* Description */}
      {project.description && (
        <div className="project-description">
          {project.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      {/* Before */}
      {project.images.before.length > 0 && (
        <div className="project-section">
          <h2>Before</h2>
          <div className="masonry-grid">
            {project.images.before.map((img, i) => (
              <img key={i} src={img} alt="" />
            ))}
          </div>
        </div>
      )}

      {/* After */}
      <div className="project-section">
        <h2>After</h2>
        <div className="masonry-grid">
          {project.images.after.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectPage;