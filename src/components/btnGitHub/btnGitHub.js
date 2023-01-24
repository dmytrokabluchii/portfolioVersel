import gitHubIcon from './gitHub-black.svg';

import './btnGitHub.css';

const BtnGitHub = ({ link }) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHubIcon} alt=""/>
            GitHub repo
        </a>
    );
}
 
export default BtnGitHub;