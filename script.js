'use strict';

const sidebar = document.querySelector('.sidebar');
// const active = document.querySelector('.active');
// console.log(active);

sidebar.addEventListener('click', function (e) {
    const active = e.target.closest('.dash-option.active');
    console.log(active);
    // active.classList.remove('active');
    // active.classList.remove('active');
    const sidebarOption = e.target.closest('.dash-option');

    sidebarOption.classList.add('active');
});
