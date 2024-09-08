import styles from './ProjectsStyles.module.css';
import TindillElectric from '../../assets/TindillElectricLogo.png';
import boardgame from '../../assets/909gameslogo.png';
import blacksettlers from '../../assets/blacksettlerslogo.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={TindillElectric}
          link="https://tindillelectric.com/"
          h3="Tindil Electric"
          p="Tindill Electric for Albertans"
        />
        <ProjectCard
          src={boardgame}
          link="https://9on9.netlify.app/"
          h3="909 Games"
          p="909 Board Games"
        />
        <ProjectCard
          src={blacksettlers}
          link="https://blacksettlers.ca/"
          h3="BlackSettlers"
          p="First Black Settlers of Alberta"
        />
        
      </div>
    </section>
  );
}

export default Projects;
