// navbar bar
const bar = document.querySelector(".navbar__bars");
const menu = document.querySelector(".navbar__menu");
bar.addEventListener("click", () => {
  menu.classList.toggle("active");
});
// JavaScript to toggle visibility of sections
function showSection(sectionId) {
  // Toggle visibility of all sections except 'all'
  document.querySelectorAll("section:not(#all)").forEach((section) => {
    section.style.display =
      section.id === sectionId || sectionId === "all" ? "block" : "none";
  });
}
