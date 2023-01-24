import Project from '../components/project/Project';

import {projects} from './../helpers/projectsList';

const Projects = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {/* Используя данные из массива projects выведим их на сраницу по порядку. 
                    Функция внутри метода map() отработает по каждому элементу массива и вернет новый массив,
                    в данном случае у нас вернется JSX массив с разметкой проектов*/}
                    {projects.map((project, index) => {
                        return (
                            <Project 
                                key={index} 
                                title={project.title} 
                                img={project.img}
                                // Перед-м св-во которое будет соот. индексу массива в проекте, что потом испол-ть его в ссылке
                                index={index}
                            />
                        );
                    })}
                    {/* {console.log(projects[0])} */}
                    {/* Вынесем карточки проектов в отдельный компонент, где данные в компонет Project(в файле Project.js)
                    передадим в виде пропса, это будет например title */}
                    {/* <Project title='Furniture-Shop'/> */}
                </ul>
            </div>
        </main>
    );
}
 
export default Projects;