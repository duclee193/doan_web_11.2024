const menuLi = document.querySelectorAll('.admin-sidebar-content > ul > li > a');
const subMenu = document.querySelectorAll('.sub-menu');
for (let index=0; index < menuLi.length; index++) {
    menuLi[index].addEventListener('click', (e)=> {
        e.preventDefault();
        // menuLi[index].parentNode.querySelector('ul').classList.toggle('active'); 
        for (let i=0; i < subMenu.length; i++) {
           subMenu[i].setAttribute("style", "height: 0px");
        }
        const submenuHeight = menuLi[index].parentNode.querySelector('ul .sub-menu-items').offsetHeight;
        console.log(submenuHeight);
        menuLi[index].parentNode.querySelector('ul').setAttribute("style", "height: "+submenuHeight+"px");

    });
};


// document.addEventListener("DOMContentLoaded", function () {
//     // Chọn tất cả các mục có submenu
//     const menuItemsWithSubmenu = document.querySelectorAll('.admin-sidebar-content > ul > li');

//     menuItemsWithSubmenu.forEach(menuItem => {
//         menuItem.addEventListener('click', function (event) {
//             event.preventDefault(); // Ngăn chặn điều hướng

//             // Kiểm tra xem submenu có đang mở không
//             const submenu = menuItem.querySelector('.sub-menu');
//             if (submenu) {
//                 submenu.classList.toggle('open'); // Bật/tắt lớp 'open'
//             }
//         });
//     });
// });
