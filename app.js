//identificare i bottoni e ciclare su di essi.
const listItems = document.querySelectorAll("li");
const accordions = document.querySelectorAll(".tabAccordion");

for (i = 0; i < listItems.length; i++) {
  let item = listItems[i];
  for (j = 0; j < accordions.length; j++) {
    let accordion = accordions[i];
    item.onclick = function () {
      if (accordion.classList.contains("tabAccordion")) {
        accordion.classList.remove("tabAccordion");
      } else {
        accordion.classList.add("tabAccordion");
        
      }
    };
    // console.log(accordion)
  }
}
