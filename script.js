const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    
    // remove active class
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // add active to clicked
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});