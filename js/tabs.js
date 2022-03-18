function changeContent (array, value) {
    array.forEach(item => {
        value === item.dataset.tabsField ? item.classList.remove("hidden") : item.classList.add("hidden");
    })
}

function tabs () {
    const tabsButton = document.querySelectorAll(".design-list__item"),
          tabsDescr = document.querySelectorAll(".design__descr"),
          tabsImages = document.querySelectorAll(".design-images");

    tabsButton.forEach((tabButton, id) => {
        tabButton.addEventListener("click", (e) => {

            const dataValue = tabButton.dataset.tabsHandler;

            tabsButton.forEach(btn => {
                btn.classList.remove("design-list__item_active");
            });

            changeContent(tabsDescr, dataValue);
            changeContent(tabsImages, dataValue);

            e.target.classList.add("design-list__item_active");
        });
    })
}

tabs();