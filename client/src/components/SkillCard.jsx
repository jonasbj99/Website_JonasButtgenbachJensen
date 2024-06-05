import BlenderIcon from "../assets/skills/BlenderIcon.png";
import UnityIcon from "../assets/skills/UnityIcon.png";
import HTMLIcon from "../assets/skills/HTMLIcon.png";
import CSSIcon from "../assets/skills/CSSIcon.png";
import CIcon from "../assets/skills/CIcon.png";
import JavaScriptIcon from "../assets/skills/JavaScriptIcon.png";
import PythonIcon from "../assets/skills/PythonIcon.png";

const skillArr = [
  {
    name: "Blender",
    img: BlenderIcon,
  },
  {
    name: "Unity",
    img: UnityIcon,
  },
  {
    name: "C#",
    img: CIcon,
  },
  {
    name: "HTML",
    img: HTMLIcon,
  },
  {
    name: "CSS",
    img: CSSIcon,
  },
  {
    name: "JavaScript",
    img: JavaScriptIcon,
  },
  {
    name: "Python",
    img: PythonIcon,
  },
];

function SkillCard() {
  return (
    <div className="skillCard">
      <h2>Experience</h2>
      <div className="skillVisuals">
        {skillArr.map((skill) => {
          return (
            <div className="skillElement">
              <img src={skill.img} alt={skill.name}></img>
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
