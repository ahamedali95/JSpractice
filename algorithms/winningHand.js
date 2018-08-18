// Write a function winningHand(hand1, hand2) that takes in
// two strings representing a hand of 4 cards. Return
// the string of the hand with the higher total score. If there
// is a tie, return 'DRAW'. Possible cards are J, Q, K.
//
// J = 1 point
// Q = 2 points
// K = 3 points
//
// Examples:
//
// winningHand('JQKJ', 'QQJJ'); // => 'JQKJ'
// winningHand('KJKJ', 'QQQK'); // => 'QQQK'
// winningHand('JKJJ', 'QQJJ'); // => 'DRAW'
// winningHand('KJKJ', 'QQQQ'); // => 'DRAW'

function winningHand(hand1, hand2) {
  const hand1Points = calculatePoints(hand1);
  const hand2Points = calculatePoints(hand2);

  if(hand1Points > hand2Points) {
    return hand1;
  } else if(hand2Points > hand1Points) {
    return hand2;
  } else {
    return "DRAW";
  }
}

function calculatePoints(hand) {
  const points = { J: 1, Q: 2, K: 3};

  return hand.split("").reduce((accumulator, ele) => {
    return accumulator += points[ele];
  }, 0);
}
