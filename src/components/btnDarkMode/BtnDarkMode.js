// Импортируем хуки
import { useEffect} from 'react';
import { useLocalStorage } from './../../utils/UseLocalStorage';
import detectDarkMode from '../../utils/detectDarkMode';

import sun from './sun.svg';
import moon from './moon.svg';

import './btnDarkMode.css';


const BtnDarkMode = () => {
    // Далее испол-м хук useState он позволит нам создать состояние
    // При запуске фун-и useState в нее мы передаем старт.значение для нашего осостояния
    // И когда эта фун-я отработает она вернет массив из 2-х элементов, мы его сразу же деструктурируем на 2 переменные
    // Где в перм-ю darkMode записано состояние, на сейчас это строка 'light', а в
    // setDarkMode записана фун-я и вызывая setDarkMode мы можем менять состояние
    // const [darkMode, setDarkMode] = useState('light');

    // Используем кастомный хук useLocalStorage
    // Вызвав useLocalStorage перед-м 1-м аргум-м в него имя ключа где он будет хранится в LocalStorage ('darkMode')
    // а 2-м аргум-м перед-м дефолтное значение для данного состояния('light')
    // В результате мы получим перемен-ю отвеч-ю за состояние(darkMode) и фун-ю(setDarkMode) отвеч-ю за измен-е этого состояния
    // const [value, setValue] = useLocalStorage('keyNameInLocalStorage', 'default value'); 
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

    // Хук useRef позволяет сразу привязываться к элементам(без querySelector) и использовать их
    // На старте он принимает null
    // подр-е на https://ru.reactjs.org/docs/hooks-reference.html#useref
    // const btnRef = useRef(null);

    // хук useEffect нужен для запуска фун-и при старте работы компонента(при первичном рендыринге запустится фун-я)
    // а также будет запускать эту фун-ю при измененении состояния. 
    // Т.е. 1-й аргумент это фун-я кот-я отработает, а 2-й аргумент - это массив, 
    // в него можно передать состояние от которых useEffect будет зависеть.
    useEffect(() => {
        // и для изменения самой темы на странице нам нужно добавить или убрать соот. класс у тега body
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
            // btnRef это объект имеющий св-во current, это тот текущий элемент к которому он привязан
            // т.е. у нас current это и есть кнопка
            // console.log(btnRef);   {current: button.dark-mode-btn}
            // btnRef.current - мы сразу ссылаемся на этот html-элемент
            // console.log(btnRef.current);   <button class="dark-mode-btn"></button>
            // btnRef.current.classList.add('dark-mode-btn--active');
        } else {
            document.body.classList.remove('dark');
            // btnRef.current.classList.remove('dark-mode-btn--active');
        }
    }, [darkMode]);

    // Данная фун-я сработает только 1 раз при 1-м рендеринге компонента
    // Прослушка системных настроек: если меняются системные настройки, меняем тему
    useEffect(() => {
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (event) => {
                const newColorScheme = event.matches ? "dark" : "light";
                setDarkMode(newColorScheme);
            });
    }, [setDarkMode]);

    // Создадим фун-ю, кот-я будет запуск-ся при клике на кнопку
    const toggleDarkMode = () => {
        // Чтобы поменять состояние основываясь на его текущем значении, в фун-ю 1-м аргументом передаем
        // его текущее значение currentValue
        // Само переключение тем происходит когда добавляется соот. активный класс у кнопки по которой кликнули
        // т.е. когда добавился класс dark тема становится темной, меняется класс как у cамой кнопки так и у body
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    };

    // Немного изменим систему перекл-я тем, выше удалим хук useRef и соот. перем-ю btnRef
    // А само условие пропишем ниже уже в самой кнопке <button>
    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';
    return ( 
        // ref={btnRef} - данные тег button будет привязан к btnRef и через него можно взаим-ть с этой кнопкой
        <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
}
 
export default BtnDarkMode;