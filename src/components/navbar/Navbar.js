// Для работы навигационных ссылок в React-router их нужно импортировать
import {NavLink} from 'react-router-dom';
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

import './navbar.css';


const Navbar = () => {
    // добавим подчеркивание для активной ссылки 
    // В перем-ю запишем название классов для ссылки, для активной и простой
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return ( 
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    {/* где в to указыв-м куда мы ссылаемся, где '/' это ссылка на главную страницу*/}
                    <NavLink to='/' className="logo">
                    <strong>FrontEnd Developer</strong> portfolio
                    </NavLink>
                    {/* <a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a> */}
                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list__item">
                        {/* В className запишем функ-ю опред-ю активность ссылки(2 варианта синтаксиса) */}
                            {/* <NavLink to='/' className={({isActive}) => {return isActive ? activeLink : normalLink;}}> */}
                            <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/projects' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to='/contacts' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Contacts
                            </NavLink>
                            {/* <a href="./contacts.html" className="nav-list__link">Contacts</a> */}
                        </li>
                    </ul>
                </div>
            </div>
      </nav>
    );
}
 
export default Navbar;