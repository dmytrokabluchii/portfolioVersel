import './project.css';

import { NavLink } from 'react-router-dom';


// Принятие свойства props можно 2-мя способами, собст-но через (props) и испол-я деструк-ю ({title})
const Project = ({title, img, index}) => {
    return ( 
        // Далее испол-м компонет NavLink, нужен для перехода по ссылке(теперь каждая карточка будет ссылкой)
        // Путь может быть таким: `/project/` + index или 
        <NavLink to={`/projectPage/${index}`}>
            <li className="project">
            {/* <a href="./project-page.html"> */}
                <img src={img} 
                    alt={title} 
                    className="project__img"/>
                {/* Далее используем наш пропс с title внутри */}
                <h3 className="project__title">
                    {title}
                </h3> 
            </li>
        </NavLink>
    );
}
 
export default Project;