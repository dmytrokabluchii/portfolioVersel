import Header from './../components/header/Header';

const Home = () => {
    return ( 
        <>
            <Header/>
            <main className="section">
                <div className="container">
                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend skills</h2>
                            <p>HTML, BEM, CSS(Flexbox, Grid Layout, CSS animation etc.), 
                                Preprocessors Saas(SCSS), JavaScript, AJAX, JSON,
                                jQuery, React, WordPress, Bootstrap, GIT, Gulp, Webpack,
                                Figma, Photoshop, Canva, Responsive design, Cross browser testing
                            </p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">About me</h2>
                            <p>I’m FrontEnd/WEB developer from Ukraine, now i live in Norway. I like web development and everything associated with it.
                                I'd like to work with interesting projects and i'm ready to work full time, part time and remote.
                            </p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}
 
export default Home;