import project01 from './../img/projects/01.jpg';
import project01Big from './../img/projects/01-big.jpg';
import project02 from './../img/projects/02.jpg';
import project02Big from './../img/projects/02-big.jpg';
import project03 from './../img/projects/03.jpg';
import project03Big from './../img/projects/03-big.jpg';
import project04 from './../img/projects/04.jpg';
import project04Big from './../img/projects/04-big.jpg';
import project05 from './../img/projects/05.jpg';
import project05Big from './../img/projects/05-big.jpg';
import project06 from './../img/projects/06.jpg';
import project06Big from './../img/projects/06-big.jpg';


// Создадим массив с описанием проектов
const projects = [
    {
        title: 'Furniture-Shop',
        about: 'Single page landing, responsive web design, send data to Telegram',
        skills: 'HTML, SCSS, Pure JS, AJAX, JSON, Swiper.js, Gulp',
        img: project01,
        imgBig: project01Big,
        gitHubLink: 'https://github.com/dmytrokabluchii/FurnitureLanding',
        pageLink: 'https://dmytrokabluchii.github.io/FurnitureLanding/',
    },
    {
        title: 'Books-landing',
        about: 'Single page landing, responsive web design, send data to Telegram and e-mail, used Pixel Perfect',
        skills: 'HTML, BEM, SCSS, Pure JS, AJAX, JSON, SmtpJS, Gulp',
        img: project02,
        imgBig: project02Big,
        gitHubLink: 'https://github.com/dmytrokabluchii/Books_landing',
        pageLink: 'https://dmytrokabluchii.github.io/Books_landing/',
    },
    {
        title: 'Suchi-shop',
        about: 'Single page, multi-language page, send data-order to Telegram',
        skills: 'HTML, CSS, Pure JS, AJAX, JSON, Bootstrap, multi-language page',
        img: project03,
        imgBig: project03Big,
        gitHubLink: 'https://github.com/dmytrokabluchii/Sushi-shop',
        pageLink: 'https://dmytrokabluchii.github.io/Sushi-shop/',
    },
    {
        title: 'Project-Testing',
        about: 'Single page landing, responsive design, send data to Telegram',
        skills: 'HTML, SCSS, Pure JS, Telegram Bot API, Swiper.js, Gulp',
        img: project04,
        imgBig: project04Big,
        gitHubLink: 'https://github.com/dmytrokabluchii/testLandingVanilla',
        pageLink: 'https://dmytrokabluchii.github.io/testLandingVanilla/',
    },
    {
        title: 'Tourplus - Travel Agency',
        about: 'Multi page landing, responsive design, selected content for the project',
        skills: 'HTML, SCSS, Java Script, AJAX, JSON, jQuery,  Gulp, Telegram Bot API, Wow.js;',
        img: project05,
        imgBig: project05Big,
        gitHubLink: 'https://github.com/dmytrokabluchii/TourPlusGulpProject',
        pageLink: 'https://dmytrokabluchii.github.io/TourPlusGulpProject/',
    },
    {
        title: 'Cahee',
        about: 'Single page landing, responsive design, project placed in real hosting, send data to e-mail, Website performance is 99%, according to Google PageSpeed',
        skills: 'HTML, PHP(mail), SCSS, CSS3-animation, JS, jQuery',
        img: project06,
        imgBig: project06Big,
        gitHubLink: 'https://github.com/dmytrokabluchii/my_projects/tree/master/Cahee_website',
        pageLink: 'https://dmytrokabluchii.github.io/my_projects/Cahee_website/',
    }
]

export {projects};