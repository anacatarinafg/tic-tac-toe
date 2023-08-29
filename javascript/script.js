const gamecontainer = document.querySelector(".container");
const gameInfo = document.querySelector(".info");

// An array to represent the game board with empty strings as placeholders for now
const gameBoxs = ["", "", "", "", "", "", "", "", ""];

// Initialize the firstSymbol as "cross"
let firstSymbol = "cross";

// Set the initial game info text.
gameInfo.textContent = "Press any box to start";

// Function to create the game board and add event listeners to each cell
function createGameContainer() {
  gameBoxs.forEach((_box, index) => {
    // Create a new cell element.
    const cell = document.createElement("div");
    // Add the "children" class to the cell
    cell.classList.add("children");
    // Set the cell's id as its index
    cell.id = index;
    // Add a click event listener to the cell
    cell.addEventListener("click", addInfo);
    // Append the cell to the game container
    gamecontainer.appendChild(cell);
  });
}
// Call the function to create the game board
createGameContainer();

// Function to handle the logic when a cell is clicked
function addInfo(e) {
  // Create a new div element to display the current player's symbol
  const displayText = document.createElement("div");
  // Add a class to the displayText div based on the current player's symbol
  displayText.classList.add(firstSymbol);
  // Append the displayText div to the clicked cell
  e.target.appendChild(displayText);
  // Toggle the player's symbol for the next turn
  firstSymbol = firstSymbol === "cross" ? "circle" : "cross";
  // Update the game info text to indicate the next player's turn
  gameInfo.textContent = "It is now " + firstSymbol + "'s time to play.";
  // Remove the click event listener from the clicked cell to prevent further moves
  e.target.removeEventListener("click", addInfo);
  // Check if the game has been won
  gameScore();
}

// Function to check the game score and determine if there's a winner
function gameScore() {
  // Get references to all the cell elements on the game board
  const allBoxs = document.querySelectorAll(".children");

  // Define the winning combinations for tic-tac-toe
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check each winning combination to see if any player has won
  winningCombinations.forEach((array) => {
    // Check if all cells in the current winning combination have the "circle" class
    const circleWon = array.every((cell) =>
      allBoxs[cell].firstChild?.classList.contains("circle")
    );
    if (circleWon) {
      // Update the game info text and reset the game board
      gameInfo.textContent = "Circle won!";
      allBoxs.forEach((box) => box.replaceWith(box.cloneNode(true)));
      return; // Exit the loop early since the game is over
    }
  });

  // Check each winning combination to see if any player has won
  winningCombinations.forEach((array) => {
    // Check if all cells in the current winning combination have the "cross" class
    const crossWon = array.every((cell) =>
      allBoxs[cell].firstChild?.classList.contains("cross")
    );
    if (crossWon) {
      // Update the game info text and reset the game board
      gameInfo.textContent = "Cross won!";
      allBoxs.forEach((box) => box.replaceWith(box.cloneNode(true)));
      return; // Exit the loop early since the game is over
    }
  });
}

// Function to reset the game board when the button is clicked
function reset() {
  const allBoxs = document.querySelectorAll(".children");
  allBoxs.forEach((box) => {
    box.textContent = "";
    box.addEventListener("click", addInfo); // Re-add click event listener
  });
  firstSymbol = "cross";
  gameInfo.textContent = "Press any box to start";
}
