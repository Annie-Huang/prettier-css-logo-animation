const container = document.querySelector(".container");
const cloneContainer = container.cloneNode(true);
cloneContainer.classList.add("duplicate");
container.append(cloneContainer);

container.addEventListener("click", () => {
  container.classList.add("slide");
  const rows = container.querySelectorAll(".row");

  const lastRow = rows[rows.length - 1];
  lastRow.addEventListener("animationend", () => {
    console.log("Here");
  });
});
