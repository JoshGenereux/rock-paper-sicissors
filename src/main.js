function getComputerChoice() {
  const array = ['rock', 'paper', 'scissors'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;
}

function rockPaperScissors(player, computer) {
  const checkType = typeof player;
  if (checkType !== 'string') {
    return 'Sorry, please type "rock", "paper", or "scissors" only.';
  }

  const playerSelection = player.toLowerCase();
  const choices = ['rock', 'paper', 'scissors'];
  if (!choices.find((index) => index === playerSelection)) {
    return 'Sorry, please type "rock", "paper", or "scissors" only.';
  }

  const tie = 'Tie! Please roll again.';

  if (player === 'rock') {
    switch (computer) {
      case 'rock':
        return tie;
      case 'paper':
        return 'You lose! Paper beats Rock.';
      case 'scissors':
        return 'You win! Rock beats scissors.';
    }
  }
  if (player === 'paper') {
    switch (computer) {
      case 'rock':
        return 'You win! Paper beats Rock.';
      case 'paper':
        return tie;
      case 'scissors':
        return 'You lose! Scissors beats Paper.';
    }
  }
  if (player === 'scissors') {
    switch (computer) {
      case 'rock':
        return 'You lose! Rock beats Scissors';
      case 'paper':
        return 'You win! Scissors beats Paper.';
      case 'scissors':
        return tie;
    }
  }
}

console.log(rockPaperScissors('scissors', getComputerChoice()));
