var count = 0

function cc(card) {
  var command = ""
  if (card >= 2 && card <= 6) {
     count += 1;
  }
  else if (card >= 7 && card <=9 ) {
    count += 0;
  }
  else if (card == 10) {
    count -= 1
  }
  else {
    count -= 1
  }
  (count >= 1 ) ? (command = "bet") : (command = "hold")
}

cc(2); cc(3); cc(7); cc('K'); cc('A');