// Select the target element
// const targetElement = document.querySelector(".target");

// // Function to handle intersection
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         document.body.style.backgroundColor = "lightblue"; // Change color when in view
//       } else {
//         document.body.style.backgroundColor = "white"; // Revert when out of view
//       }
//     });
//   },
//   { threshold: 0.5 }
// ); // Trigger when 50% of the element is visible

// // Observe the element
// observer.observe(targetElement);

const colors = [
  "#f6e0a4",
  "#ff608c",
  "#ffffff",
  "#00c1b5",
  "#ff6519",
  "#ffbe00",
  "#1d3fbb",
  "#e30512",
];

const issues = document.querySelectorAll(".issue");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const index = Array.from(issues).indexOf(entry.target);

        if (index !== -1) {
          console.log(
            `Issue ${index + 1} entered viewport, setting background to:`,
            colors[index % colors.length]
          );
          const bgColor = colors[index % colors.length]; // Ensure valid color selection
          document.documentElement.style.backgroundColor = bgColor;
        }
      }
    });
  },
  { threshold: 0.5 }
);

issues.forEach((el) => {
  observer.observe(el);
});
