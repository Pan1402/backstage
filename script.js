const issues = document.querySelectorAll(".issue");

const htmlElement = document.documentElement;

window.addEventListener("scroll", function () {
  if (window.scrollY >= 4500) {
    htmlElement.style.backgroundColor = "#e30512";
  } else if (window.scrollY >= 3928) {
    htmlElement.style.backgroundColor = "#1d3fbb";
  } else if (window.scrollY >= 3266) {
    htmlElement.style.backgroundColor = "#ffbe00";
  } else if (window.scrollY >= 2550) {
    htmlElement.style.backgroundColor = "#ff6519";
  } else if (window.scrollY >= 1890) {
    htmlElement.style.backgroundColor = "#00c1b5";
  } else if (window.scrollY >= 1266) {
    htmlElement.style.backgroundColor = "#fff";
  } else if (window.scrollY >= 549) {
    htmlElement.style.backgroundColor = "#ff608c";
  } else {
    htmlElement.style.backgroundColor = "#f6e0a4"; // Default for scrollY < 549
  }
});
