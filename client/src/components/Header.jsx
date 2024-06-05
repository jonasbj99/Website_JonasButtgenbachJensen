import instaSvg from "../assets/insta.svg";
import linkedInSvg from "../assets/linkedIn.svg";
import githubSvg from "../assets/github.svg";
import JBJIcon from "../assets/pageLogo.svg";

function Header() {
  return (
    <header>
      <h1 className="siteTitle">
        <a href="/">
          {/* Jonas Büttgenbach Jensen */}
          <img className="titleIcon" src={JBJIcon} alt="" />
        </a>
      </h1>
      <nav>
        <ul className="navList">
          <NavEl href={"/projects"}>Projects</NavEl>
          <NavEl href={"/about"}>About Me</NavEl>
          <NavEl href={"/guest"}>Guest Book</NavEl>
        </ul>
      </nav>
      <div className="socials">
        <a href="https://github.com/jonasbj99" target="_blank">
          <img src={githubSvg} alt="Github Link" />
        </a>
        <a
          href="https://www.linkedin.com/in/jonas-jensen-36ba6b310/"
          target="_blank"
        >
          <img src={linkedInSvg} alt="LinkedIn Link" />
        </a>
        <a href="https://www.instagram.com/jonasbuttgenbach/" target="_blank">
          <img src={instaSvg} alt="Instagram Link" />
        </a>
      </div>
    </header>
  );
}

function NavEl({ href, children }) {
  const path = window.location.pathname;
  return (
    <li className={path === href ? "active" : ""}>
      <a href={href}>{children}</a>
    </li>
  );
}

export default Header;
