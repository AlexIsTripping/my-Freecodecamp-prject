const projectCards = [
  document.querySelector(".project-card-1"),
  document.querySelector(".project-card-2"),
  document.querySelector(".project-card-3"),
];

const proj_img_cards = [
  [
    document.getElementById("project-card-1-img-1"),
    document.getElementById("project-card-1-img-2"),
    document.getElementById("project-card-1-img-3"),
  ],
  [
    document.getElementById("project-card-2-img-1"),
    document.getElementById("project-card-2-img-2"),
    document.getElementById("project-card-2-img-3"),
    document.getElementById("project-card-2-img-4"),
  ],
  [
    document.getElementById("project-card-3-img-1"),
    document.getElementById("project-card-3-img-2"),
    document.getElementById("project-card-3-img-3"),
    document.getElementById("project-card-3-img-4"),
  ]
];

let timerForSlides = [0, 0, 0];
let hoverIntervals = [null, null, null];

function startTimer(cardIndex) {
  hoverIntervals[cardIndex] = setInterval(() => {
    timerForSlides[cardIndex]++;
    console.log(`Timer for card ${cardIndex + 1}: ${timerForSlides[cardIndex]}`);

    proj_img_cards[cardIndex].forEach(img => img.style.display = "none");

    let slideIndex = timerForSlides[cardIndex] % proj_img_cards[cardIndex].length;
    proj_img_cards[cardIndex][slideIndex].style.display = "block";
    console.log(`Show slide ${slideIndex + 1} for card ${cardIndex + 1}`);
  }, 1000);
}

function stopTimer(cardIndex) {
  clearInterval(hoverIntervals[cardIndex]);
  proj_img_cards[cardIndex].forEach(img => img.style.display = "none");
  proj_img_cards[cardIndex][0].style.display = "block";
  timerForSlides[cardIndex] = 0;
}

projectCards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => startTimer(index));
  card.addEventListener("mouseleave", () => stopTimer(index));
});
