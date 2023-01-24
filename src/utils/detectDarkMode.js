// Проверка вкл. ли темная/светлая тема в настройках
const detectDarkMode = () => {
    if (
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        // Если вкл. то...
        return 'dark'
    }
    return 'light'
};

export default detectDarkMode;