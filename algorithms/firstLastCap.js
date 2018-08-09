// Write a function `firstLastCap(sentence)` that takes in a sentence and returns a new
// sentence where the first and last letters of each word is uppercase. All other characters
// should be lowercase.
//
// Examples:
//
// firstLastCap('hello BOOTCAMP PrEp'); // =>'HellO BootcamP PreP'
// firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'

const firstLastCap = (sentence) => {
  return sentence.toLowerCase().split(" ").map(ele => {
    return ele[0].toUpperCase() + ele.slice(1, -1) + ele.slice(-1).toUpperCase();
  }).join(" ");
}
