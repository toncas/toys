const findRotationPoint = (words) => {
  let firstWord = words[0];
  let floor = 0;
  let ceiling = words.length - 1;

  while (floor < ceiling) {
    if (floor + 1 === ceiling) {
      break;
    }
    let guessIndex = Math.floor(floor + (ceiling - floor) / 2);
    if (words[guessIndex] < firstWord) {
      ceiling = guessIndex;
    } else {
      floor = guessIndex;
    }
  }
  return ceiling;
}

var words = [
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  30,
  40,
  41,
  45,
  0,
  1,
  2,
  3,
  4,
  5
];

console.log(words[findRotationPoint(words)]);