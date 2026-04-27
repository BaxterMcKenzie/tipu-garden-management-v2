import { useParams } from "react-router-dom";
import ourWork from "../data/ourWork.json";

const ProjectPage = () => {
  const { slug } = useParams();

  const project = ourWork.find(p => p.slug === slug);

  if (!project) return <p>Project not found</p>;

  return (
    <div>
      <h1>{project.title}</h1>

      <h3>Before</h3>
      {project.images.before.map((img, i) => (
        <img key={i} src={img} alt="" />
      ))}

      <h3>After</h3>
      {project.images.after.map((img, i) => (
        <img key={i} src={img} alt="" />
      ))}
    </div>
  );
};

export default ProjectPage;