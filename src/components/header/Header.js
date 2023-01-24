import './header.css';

const Header = () => {
    return ( 
        <header className="header">
          <div className="header__wrapper">
              <h1 className="header__title">
                  <strong>Hi, my name is <em>Dmytro</em></strong><br/>
                  Frontend/Web developer
              </h1>
              <div className="header__text">
                  <p>with passion for learning and creating.</p>
              </div>
              <a className="btn" 
                href="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1AoSFs0JP0nkh8QQ9I3XHQt8CuMKfPfyq"
                rel="noopener" title="Download Dmytro's Resume" download>
                    Download my CV
              </a>
          </div>
      </header>
    );
}
 
export default Header;