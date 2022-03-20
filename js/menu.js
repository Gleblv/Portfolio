function menu () {
    const burger = document.querySelector(".humburger-menu"),
          menu = document.querySelector(".menu"),
          menuItems = document.querySelectorAll(".menu-list__item");

    burger.addEventListener("click", () => {
        menu.classList.toggle("menu-active");
    });

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.remove("menu-active");
        })
    });

    document.addEventListener("click", (e) => {
        if (e.target != menu && e.target != burger) {
            menu.classList.remove("menu-active");
        }
    });
}

menu();