function rollDice() {

  //Set each roll to be a random number between 1 and 6 inclusive
  var roll1 = Math.floor(((Math.random() * 6) + 1));
  var roll2 = Math.floor(((Math.random() * 6) + 1));

  //Roll Die 1
  document.querySelector("#p1Die").src ="img/dice" + roll1 + ".png";

  //Roll Die 2
  document.querySelector("#p2Die").src ="img/dice" + roll2 + ".png";

  //Display the winner
  if (roll1 > roll2) {
    document.querySelector(".result").innerHTML = "Player One Wins!";
  }
  else if (roll1 < roll2) {
    document.querySelector(".result").innerHTML = "Player Two Wins!";
  }
  else {
    document.querySelector(".result").innerHTML = "It's a tie! Roll again!";
  }
  document.querySelector(".result").classList.add("visible");
}
//Run the function when button is clicked
document.querySelector(".btn-roll").onclick = rollDice;
