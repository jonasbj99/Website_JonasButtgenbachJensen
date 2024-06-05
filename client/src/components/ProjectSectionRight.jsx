import VideoCard from "./VideoCard.jsx";

function ProjectSectionRight(project) {
  return (
    <div className="section">
      <div className="projectInfo">
        <div className="projectTitle">
          <h4>{project.title}</h4>
          <h3>{project.subtitle}</h3>
        </div>
        <p>{project.desc}</p>
        <VideoCard video={project.video} />
      </div>
      <div className="projectImg">
        <img src={project.img} alt="Project Image" />{" "}
      </div>
    </div>
  );
}

export default ProjectSectionRight;
