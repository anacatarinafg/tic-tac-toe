let buttons = document.querySelectorAll(".memory__button");
let images = document.querySelectorAll(".memory__image");

let score = document.querySelector(".memory__score .memory__counter");
let scoreInfo = document.querySelector(".memory__score");

let reset = document.querySelector(".memory__reset");

// Array of fruit objects with IDs, images, and counts
let fruitsArr = [
  {
    id: 0,
    img: "./assets/fruits/apple.png",
    count: 0,
  },
  {
    id: 1,
    img: "./assets/fruits/banana.png",
    count: 0,
  },
  {
    id: 2,
    img: "./assets/fruits/orange.png",
    count: 0,
  },
  {
    id: 3,
    img: "./assets/fruits/coco.png",
    count: 0,
  },
  {
    id: 4,
    img: "./assets/fruits/strawberry.png",
    count: 0,
  },
  {
    id: 5,
    img: "./assets/fruits/raspberry.png",
    count: 0,
  },
  {
    id: 6,
    img: "./assets/fruits/pear.png",
    count: 0,
  },
  {
    id: 7,
    img: "./assets/fruits/lemon.png",
    count: 0,
  },
];

// Function to generate a random image URL for the memory game
function changeImageGenerator() {
  let randomImage = Math.floor(Math.random() * 10000) % fruitsArr.length;

  // Ensure each fruit appears at most twice in the game
  while (fruitsArr[randomImage].count == 2) {
    randomImage = Math.floor(Math.random() * 10000) % fruitsArr.length;
  }

  fruitsArr[randomImage].count++;

  return fruitsArr[randomImage].img;
}

// Initialize variables for tracking clicked buttons and game progress
let previousButton = "";
let currentButton = "";

let totalClicks = 0;
let successfulClicks = 0;

// Event listener for when the page is loaded
window.addEventListener("DOMContentLoaded", function () {
  // Initialize images on the game board
  for (let i = 0; i < images.length; i++) {
    images[i].style.zIndex = "-1";
    images[i].src = changeImageGenerator();
  }
});

// Event listener for handling button clicks
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    totalClicks++;
    let img = this.querySelector(".memory__image");

    // Check if the clicked button's image is hidden
    if (img.style.zIndex === "-1") {
      img.style.zIndex = "2";
      this.disabled = true;
      this.classList.remove("hoverEffect");

      // If this is the first click, remember it as the previous button
      if (previousButton === "") {
        previousButton = this;
      } else {
        currentButton = this;

        let currentImage = currentButton.querySelector(".memory__image").src;
        let previousImage = previousButton.querySelector(".memory__image").src;

        // Check if the images match
        if (currentImage == previousImage) {
          // If the images match, disable the buttons and don't hide them
          previousButton.disabled = true;
          previousButton.classList.remove("hoverEffect");

          currentButton.disabled = true;
          currentButton.classList.remove("hoverEffect");

          // Remove matched buttons from the array
          let temp = [];
          for (let i = 0; i < buttons.length; i++) {
            if (buttons[i] !== currentButton && buttons[i] !== previousButton) {
              temp.push(buttons[i]);
            }
          }

          buttons = temp;

          previousButton = "";
          currentButton = "";
          successfulClicks += 2;

          // Calculate and update the score
          let scores = Math.ceil((successfulClicks / totalClicks) * 100);
          score.textContent = scores;

          // If all pairs have been matched, show the final score
          if (successfulClicks == 16) {
            scores = Math.ceil((successfulClicks / totalClicks) * 100);
            scoreInfo.textContent = "Final score: " + score;
          }
        } else {
          // If the images don't match, handle hiding them and resetting the buttons
          setTimeout(function () {
            currentButton.querySelector(".memory__image").style.zIndex = -1;
            previousButton.querySelector(".memory__image").style.zIndex = -1;
            currentButton.disabled = false;
            currentButton.classList.add("hoverEffect");
            previousButton.disabled = false;
            previousButton.classList.add("hoverEffect");
            previousButton = "";
            currentButton = "";
          }, 250);
        }
      }
    }
  });
}

// Event listener for resetting the game
reset.addEventListener("click", function () {
  // Reset game variables and elements
  previousButton = "";
  currentButton = "";

  totalClicks = 0;
  successfulClicks = 0;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
    buttons[i].classList.add("hoverEffect");
    buttons[i].querySelector(".memory__image").style.zIndex = -1;
  }

  for (let i = 0; i < fruitsArr.length; i++) {
    fruitsArr[i].count = 0;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].style.zIndex = "-1";
    images[i].src = changeImageGenerator();
  }

  score = 0;
  scoreInfo.innerHTML = `Live score: <span class="memory__counter">${score}</span>`;
});
