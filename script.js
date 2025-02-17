function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-menu");
    const body = document.body;
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    body.classList.toggle('menu-open');
}
    document.querySelector('.hamburger-icon').addEventListener('click', function() {
        this.classList.toggle('open');
    });


