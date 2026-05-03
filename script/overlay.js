const buttons = document.querySelectorAll(".overlay-controls button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetClass = button.dataset.target;
    const overlay = document.querySelector("." + targetClass);

    overlay.classList.toggle("hidden");
  });
});
