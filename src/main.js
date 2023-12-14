function getComputerChoice() {
  const array = ['rock', 'paper', 'scissors'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  console.log(randomElement);
}
