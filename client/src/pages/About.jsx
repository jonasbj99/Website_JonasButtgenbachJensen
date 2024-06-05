import SkillCard from "../components/SkillCard.jsx";

function About() {
  return (
    <main className="aboutMain">
      <div className="aboutWindow glass">
        <div className="aboutSection">
          <img src="https://placehold.jp/400x400.png" alt="" />
          <div className="aboutText">
            <h1>My name is Jonas Büttgenbach Jensen,</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              accumsan enim sed blandit sollicitudin. Morbi eget tincidunt diam.
              In pulvinar, ex in pellentesque suscipit, lorem sapien fringilla
              ligula, eget finibus odio lorem id dui. Praesent dolor nulla,
              eleifend non euismod eget, tincidunt sed justo. Phasellus vitae
              vehicula turpis. Nullam condimentum dolor id ex ullamcorper, quis
              accumsan nulla bibendum. Sed rutrum nunc dolor, at commodo nisl
              ultrices a. Cras euismod dapibus risus. Aliquam faucibus dui in
              eros mollis ullamcorper.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              accumsan enim sed blandit sollicitudin. Morbi eget tincidunt diam.
              In pulvinar, ex in pellentesque suscipit, lorem sapien fringilla
              ligula, eget finibus odio lorem id dui. Praesent dolor nulla,
              eleifend non euismod eget, tincidunt sed justo. Phasellus vitae
              vehicula turpis. Nullam condimentum dolor id ex ullamcorper, quis
              accumsan nulla bibendum. Sed rutrum nunc dolor, at commodo nisl
              ultrices a. Cras euismod dapibus risus. Aliquam faucibus dui in
              eros mollis ullamcorper.
            </p>
          </div>
        </div>
        <SkillCard />
      </div>
    </main>
  );
}

export default About;
