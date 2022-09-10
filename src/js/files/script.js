// // Подключение функционала "Чертогов Фрилансера"
// import { cli } from "webpack-dev-server";
// import { isMobile } from "./functions.js";
// // Подключение списка активных модулей
// import { flsModules } from "./modules.js";

document.addEventListener("click", documentActions);

const menuBlocks = document.querySelectorAll('.sub-menu-catalog__block'); //Меню blok получаем все объекты блок
if (menuBlocks.length) { //Проверяем если они есть  
    menuBlocks.forEach(menuBlock => {
        const menuBlockItems = menuBlock.querySelectorAll('.sub-menu-catalog__category').length; // Получаем количество категорий 
        menuBlock.classList.add(`sub-menu-catalog__block_${menuBlockItems}`); //Добавляем блоку класс с количеством категорий 
    })
}

function documentActions(e) {
    const targetElement = e.target;
    if (targetElement.closest('[data-parent]')) {
        const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;   //dataset считывает атрибут(медленнее get atribute) 
        const subMenu = document.querySelector(`[data-submenu="${subMenuId}"]`);

        if (subMenu) {
            const activeLink = document.querySelector('._sub-menu-active');
            const activeBlock = document.querySelector('._sub-menu-open');

            if (activeLink && activeLink !== targetElement) {
                activeLink.classList.remove('_sub-menu-active');
                activeBlock.classList.remove('_sub-menu-open');
                document.documentElement.classList.remove('sub-menu-open');
            }
            document.documentElement.classList.toggle('sub-menu-open');
            targetElement.classList.toggle('_sub-menu-active');
            subMenu.classList.toggle('_sub-menu-open');

        } else {
            console.log('Coś tu jest zepsute :(');
        }

        e.preventDefault();
    }
    if (targetElement.closest('.menu-top-header__link_catalog')) {
        document.documentElement.classList.add('catalog-open'); //навесим класс на html
        e.preventDefault();
    }
    if (targetElement.closest('.menu-catalog__back')) {
        document.documentElement.classList.remove('catalog-open'); // при условии нажатия на элемент menu-catalog__back сделать remove catalog-open
        document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active'): null; // сначала проверяем существует ли блок потом убираем класс
        document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open'): null;
        e.preventDefault();
    }
    if (targetElement.closest('.sub-menu-catalog__back')) {
        document.documentElement.classList.remove('sub-menu-open');
        document.querySelector('._sub-menu-active') ? document.querySelector('._sub-menu-active').classList.remove('_sub-menu-active'): null; // сначала проверяем существует ли блок потом убираем класс
        document.querySelector('._sub-menu-open') ? document.querySelector('._sub-menu-open').classList.remove('_sub-menu-open'): null;
        e.preventDefault();
    }

    
} 


if (document.querySelector('.filter-catalog__title')) {
document.querySelector('.filter-catalog__title').addEventListener("click", function (e){
    if(window.innerWidth < 992){
        document.querySelector('.filter-catalog__items').classList.toggle('_active');
    }
});
}