import './footer.css';

import telegram from './../../img/icons/telegram.svg';
import codepen from './../../img/icons/codepen.svg';
import gitHub from './../../img/icons/gitHub.svg';
import linkedIn from './../../img/icons/linkedIn.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a className="telegram-icon" href="https://t.me/dimakabl" 
                                target="_blank" rel="noreferrer">
                                <img src={telegram} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="codepen-icon" href="https://codepen.io/dima-kabluchii/" 
                                target="_blank" rel="noreferrer">
                                <img src={codepen} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="gitHub-icon" href="https://github.com/dmytrokabluchii" 
                                target="_blank" rel="noreferrer">
                                <img src={gitHub} alt="Link"/>
                            </a>
                        </li>
                        <li className="social__item">
                            <a className="linkedIn-icon" href="https://www.linkedin.com/in/dmytro-kabluchii-219020222/" 
                                target="_blank" rel="noreferrer">
                                <img src={linkedIn} alt="Link"/>
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 MyProjectStudio</p>
                    </div>
                </div>
            </div>
      </footer>
    );
}
 
export default Footer;