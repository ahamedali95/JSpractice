// Write a function nickname(name) that takes in a name string and returns a
// string representing their nickname.
// A nickname is the name up to the second vowel repeated twice. See the examples.
//
// Examples:
//
// nickname('manuel'); // => 'MANU-MANU'
// nickname('pikachu'); // => 'PIKA-PIKA'
// nickname('bootcamp'); // => 'BOO-BOO'
// nickname('bob'); // => 'BOB-BOB'

function nickname(name) {
  const vowels = [..."aeiou"];
  let vowelCount = 0;
  let nickName = "";

  for(let i = 0; i < name.length; i++) {
    const currentChar = name[i];

    if(vowles.indexOf(currentChar) !== -1) {
      vowelCount++;
    } else {
      nickName += currentChar;
    }

    if(vowelCount === 2) break;
  }

  return nickName.toUpperCase() + "-" + nickName.toUpperCase();
}
