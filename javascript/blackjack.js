// Define the blackjack game object with player data, cards, scores, wins, losses, and game state
let blackjack = {
  // Players information
  you: { scoreSpan: "#scoreYou", div: "#infoYou", score: 0 },
  dealer: { scoreSpan: "#scoreDealer", div: "#infoDealer", score: 0 },

  // Array of card values
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],

  // Mapping of card values to their numerical equivalents
  cardsValues: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 13,
    Q: 12,
    J: 11,
    A: [1, 11],
  },

  // Game statistics
  wins: 0,
  losses: 0,
  draws: 0,

  // Game state flags
  isStand: false,
  turnOver: false,
};

// Get references to user objects
const userYou = blackjack["you"];
const userDealer = blackjack["dealer"];

// Add event listeners for game actions (hit, stand, deal)
document.querySelector("#hit").addEventListener("click", blackjackHit);
document.querySelector("#stand").addEventListener("click", blackjackStand);
document.querySelector("#deal").addEventListener("click", blackjackDeal);

// Function to handle when the player hits
function blackjackHit() {
  // Check if the player is allowed to hit
  if (blackjack["isStand"] === false) {
    // Draw a random card, update scores, and display
    let card = randomCard();
    showCard(card, userYou);
    updatedScore(card, userYou);
    showScore(userYou);
  }
}

// Function to generate a random card
function randomCard() {
  let anyCard = Math.floor(Math.random() * 13);
  return blackjack["cards"][anyCard];
}

// Function to display a card
function showCard(card, player) {
  // Check if the player's score allows displaying the card
  if (player["score"] <= 30) {
    let imageCard = document.createElement("img");
    imageCard.src = `assets/${card}.png`;
    document.querySelector(player["div"]).appendChild(imageCard);
  }
}

// Function to handle the deal action
function blackjackDeal() {
  // Check if the round is over
  if (blackjack["turnOver"] === true) {
    // Reset game state for a new round
    blackjack["isStand"] = false;

    // Remove displayed cards
    let playerImage = document
      .querySelector(".blackjack__you")
      .querySelectorAll("img");
    let dealerImage = document
      .querySelector(".blackjack__dealer")
      .querySelectorAll("img");

    for (let i = 0; i < playerImage.length; i++) {
      playerImage[i].remove();
    }
    for (let i = 0; i < dealerImage.length; i++) {
      dealerImage[i].remove();
    }

    // Reset player scores
    userYou["score"] = 0;
    userDealer["score"] = 0;

    // Reset displayed scores
    document.querySelector("#scoreYou").textContent = 0;
    document.querySelector("#scoreDealer").textContent = 0;

    // Reset result display
    document.querySelector("#blackjack__result").textContent =
      "Press 'hit' to start";
    document.querySelector("#blackjack__result").computedStyleMap.color =
      "#141414";

    // Update game state
    blackjack["turnOver"] = true;
  }
}

// Function to update the score based on the drawn card
function updatedScore(card, player) {
  if (card === "A") {
    // If adding 11 doesn't exceed 30, use it; otherwise, use 1
    if (player["score"] + blackjack["cardsValues"][card][1] <= 30) {
      player["score"] += blackjack["cardsValues"][card][1];
    } else {
      player["score"] += blackjack["cardsValues"][card][0];
    }
  } else {
    // Add the card's value to the player's score
    player["score"] += blackjack["cardsValues"][card];
  }
}

// Function to display the player's score or 'BUST!' if over 30
function showScore(player) {
  const scoreElement = document.querySelector(player.scoreSpan);
  if (player.score > 30) {
    // Display 'BUST!' in red if the player's score is over 30
    scoreElement.textContent = "BUST!";
    scoreElement.style.color = "red";
  } else {
    // Display the player's score
    scoreElement.textContent = player.score;
  }
}

// Function to introduce a delay using asynchronous timing
function time(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function for the dealer's turn in the game
async function blackjackStand() {
  // Set the game state to 'stand'
  blackjack["isStand"] = true;
  // Keep drawing cards for the dealer until reaching a score of 16
  while (userDealer["score"] < 16 && blackjack["isStand"] === true) {
    let card = randomCard();
    // Display the drawn card for the dealer, update score, and show score
    showCard(card, userDealer);
    updatedScore(card, userDealer);
    showScore(userDealer);
    // Introduce a delay before the next card is drawn
    await time(500);
  }
  // Set the turnOver state to true and determine the winner
  blackjack["turnOver"] = true;
  let winner = gameWinner();
  // Show the result of the game
  showResult(winner);
}

// Function to determine the winner of the game
function gameWinner() {
  let winner;
  // Check different scenarios to determine the winner
  if (userYou["score"] <= 30) {
    if (userYou["score"] > userDealer["score"] || userDealer["score"] > 30) {
      blackjack["wins"]++;
      winner = userYou;
    } else if (userYou["score"] < userDealer["score"]) {
      blackjack["losses"]++;
      winner = userDealer;
    } else if (userYou["score"] === userDealer["score"]) {
      blackjack["draws"]++;
    }
  } else if (userYou["score"] > 30 && userDealer["socre"] <= 30) {
    blackjack["losses"]++;
    winner = userDealer;
  } else if (userYou["score"] > 30 && userDealer["score"] > 30) {
    blackjack["draws"]++;
  }
  // Return the winner of the game
  return winner;
}

// Function to display the result of the game
function showResult(winner) {
  let message, messageColor;
  if (blackjack["turnOver"] === true) {
    // Display the appropriate message based on the winner
    if (winner === userYou) {
      document.querySelector("#wins").textContent = blackjack["wins"];
      message = "You Won!";
      messageColor = "green";
    } else if (winner === userDealer) {
      document.querySelector("#losses").textContent = blackjack["losses"];
      message = "You Lose!";
      messageColor = "red";
    } else {
      document.querySelector("#draws").textContent = blackjack["draws"];
      message = "You Drew!";
      messageColor = "black";
    }
    // Display the result message in the appropriate color
    document.querySelector("#blackjack__result").textContent = message;
    document.querySelector("#blackjack__result").style.color = messageColor;
  }
}
