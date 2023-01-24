import './styles/main.css';

// Подключаем React-Router-Dom
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';

import ScrollToTop from './utils/ScrollToTop';


function App() {
  return (
    <div className="App">
      {/* используем  React-Router для маршрутизации страниц*/}
      <Router>
        {/* Испол-м компонент ScrollToTop чтобы скролл при переключении страницы перем-ся вверх страницы */}
        <ScrollToTop/>
        {/* Используем компонент Navbar*/}
        <Navbar/>
        {/* Далее нужно определить маршруты и определить по какому маршруту какой компонент должен открываться
        и определяются маршруты через компонент Route, где указываем путь(path) куда переходим и элемент(element),
        это тот компонент кот-й должен быть открыт когда мы находимся на данном маршруте*/}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projectPage/:id' element={<ProjectPage />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>

        <Footer/>
      </Router>

    </div>
  );
}

export default App;


// прописать в package.json - "homepage": ".", 
// Только если используется роутинг реакта, придётся использовать HashRouter. Ибо BrowserRouter 
// будет работать, но при обновлении страницы будет выдавать 404. А если роутинга нет и приложение 
// одностраничное, то вообще отличное решение.

// Deploy проекта на страницу
// устанавливаем gh-pages: 
// npm i gh-pages
// В package.json в корень добавление строки
// "homepage": "https://dmytrokabluchii.github.io/portfolio",
// или
// "homepage": "http://dimdim.byethost13.com/portfolio/"
// В "scripts" добавляем
// "deploy": "gh-pages -d build",
// "predeploy": "npm run build"
// Запуск Deploy:
// npm run deploy

// "homepage": "https://localhost:3000",