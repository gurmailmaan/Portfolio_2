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
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

      <ProjectCard
          src={favicon}
          link="https://maangurmail.com"
          h3="Portfolio"
          p="My old Porfolio Developed using React and Bootstrap"
        />
        <ProjectCard
          src={TindillElectric}
          link="https://tindillelectric.com/"
          h3="Tindil Electric"
          p="Tindill Electric for Albertans"
        />
        <ProjectCard
          src={boardgame}
          link="https://9on9.netlify.app/"
          h3="9on9 Games"
          p="9on9 Board Games React based website"
        />
        <ProjectCard
          src={blacksettlers}
          link="https://blacksettlers.ca/"
          h3="BlackSettlers"
          p="First Black Settlers of Alberta"
        />
        <ProjectCard
          src={convo}
          link="https://convoreact.netlify.app/"
          h3="Convo"
          p="Realtime Chat App using Reactjs and Firebase"
        />
        <ProjectCard
          src={gemini}
          link="https://mygeminiclonereact.netlify.app/"
          h3="gemini"
          p="Gemini clone using Reactjs and Google gemini API"
        />
        <ProjectCard
          src={hello}
          link="https://karan-cv.netlify.app/"
          h3="Portfolio"
          p="Developed My Friend's Porfolio"
        />
        
        
      </div>
    </section>
  );
}

export default Projects;
