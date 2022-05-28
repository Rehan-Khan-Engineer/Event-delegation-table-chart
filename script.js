let table = document.getElementById("color-table");

let selectedElement;

table.addEventListener("click", function (event) {
  let target = event.target;

  //this here refers to the <table> element
  while (target != this) {
    if (target.tagName == "TD") {
      highlight(target);
      return;
    }

    target = target.parentNode;
  }
});

function highlight(element) {
  if (selectedElement) {
    selectedElement.classList.remove("highlight");
  }
  selectedElement = element;
  selectedElement.classList.add("highlight");
}
