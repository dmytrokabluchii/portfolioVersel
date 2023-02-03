import { useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/btnGitHub';

import {projects} from './../helpers/projectsList';

const ProjectPage = () => {
    const {id} = useParams();
    const project = projects[id];

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
                
                {project.gitHubLink && (
                    <BtnGitHub link={project.gitHubLink}/>
                )}
            </div>
        </div>
    </main>
    );
}
 
export default ProjectPage;