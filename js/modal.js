function modal () {
    const modalBtn = document.querySelector(".more"),
          modal = document.querySelector(".modal"),
          overlay = document.querySelector(".overlay"),
          closeModalBtn = document.querySelector(".modal__close");

    modalBtn.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    overlay.addEventListener("click", () => {
        modal.classList.add("hidden");
    })

    closeModalBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
}

modal();