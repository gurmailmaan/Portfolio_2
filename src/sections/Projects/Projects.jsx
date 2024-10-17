import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import TindillElectric from '../../assets/TindillElectricLogo.png';
import boardgame from '../../assets/909gameslogo.png';
import blacksettlers from '../../assets/blacksettlerslogo.png';
import convo from '../../assets/convo.png';
import gemini from '../../assets/gemini.png';
import hello from '../../assets/hello.png';
import favicon from '../../assets/favicon.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  // State to manage showing 6 or all projects
  const [showAll, setShowAll] = useState(false);

  // List of all projects
  const projects = [
    {
      src: favicon,
      link: "https://maangurmail.com",
      h3: "Portfolio",
      p: "My old Portfolio Developed using React and Bootstrap"
    },
    {
      src: TindillElectric,
      link: "https://tindillelectric.com/",
      h3: "Tindill Electric",
      p: "Tindill Electric for Albertans"
    },
    {
      src: boardgame,
      link: "https://9on9.netlify.app/",
      h3: "9on9 Games",
      p: "9on9 Board Games React based website"
    },
    {
      src: blacksettlers,
      link: "https://blacksettlers.ca/",
      h3: "BlackSettlers",
      p: "First Black Settlers of Alberta"
    },
    {
      src: convo,
      link: "https://convoreact.netlify.app/",
      h3: "Convo",
      p: "Realtime Chat App using Reactjs and Firebase"
    },
    {
      src: gemini,
      link: "https://mygeminiclonereact.netlify.app/",
      h3: "Gemini",
      p: "Gemini clone using Reactjs and Google Gemini API"
    },
    {
      src: hello,
      link: "https://karan-cv.netlify.app/",
      h3: "Portfolio",
      p: "Developed My Friend's Portfolio"
    }
  ];

  // Show only 6 projects initially, or all if "showAll" is true
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>

      {/* Button to show more or hide */}
      {!showAll && (
        <button className={styles.viewAllButton} onClick={() => setShowAll(true)}>
          View All
        </button>
      )}
    </section>
  );
}

export default Projects;
