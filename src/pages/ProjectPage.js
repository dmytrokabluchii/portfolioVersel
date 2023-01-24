// Для перемещения по проектам и испол-я id в App.js достаем фун-ю useParams
import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/btnGitHub';

// Достаем массив projects с нашими проетами
import {projects} from './../helpers/projectsList';

// import img from './../img/projects/02-big.jpg';

const ProjectPage = () => {
    // Достанем параметр id(испол-я деструк-ю) используя фун-ю useParams
    // И тогда в id у нас будет нах-ся параметр кот-й мы передали
    const {id} = useParams();
    const project = projects[id];
    // console.log(project);

    return ( 
        <main className="section">
        <div className="container">
            <div className="project-details">
                <h1 className="title-1">{project.title}</h1>
                
                <a className="project-link" href={project.pageLink} target="_blank" rel="noreferrer">
                    <img 
                        src={project.imgBig} 
                        alt={project.title} 
                        className="project-details__cover"
                    />
                </a>

                <div 
                    className="project-details__desc">
                        <h2 className="title-2">About project:</h2>
                    <p>{project.about}</p>
                </div>
                <div 
                    className="project-details__desc">
                        <h3 className="title-2">Technologies used:</h3>
                    <p>{project.skills}</p>
                </div>

                {/*Если ссылки не будет на github то кнопку не показываем*/}
                {project.gitHubLink && (
                    <BtnGitHub link={project.gitHubLink}/>
                )}

            </div>
        </div>
    </main>
    );
}
 
export default ProjectPage;