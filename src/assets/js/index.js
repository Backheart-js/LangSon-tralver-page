const $ = document.querySelector.bind(document);

const menu_icon = $('.header-menu-icon');
const menu_list = $('.menu-list');
let isOpen = false;

const handleMenuClick = () => {
    isOpen = !isOpen;

    menu_list.classList.toggle('d-flex', isOpen);
}

menu_icon.addEventListener('click', handleMenuClick);