function accordeon () {
    const accordeon = document.querySelector(".feature-list"),
          accordeonBtns = document.querySelectorAll(".feature__link");

    accordeonBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            accordeonBtns.forEach(button => {
                button.classList.remove("feature__link_active");
                button.nextElementSibling.classList.add("hidden");  // nextElemntSibling позволяет получить следующий элемент
            })

            btn.classList.toggle("feature__link_active");
            btn.nextElementSibling.classList.toggle("hidden"); // nextElemntSibling позволяет получить следующий элемент
        })
    })
}   

accordeon();