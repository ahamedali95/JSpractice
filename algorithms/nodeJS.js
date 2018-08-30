process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = '';
process.stdin.on('data', function (chunk) {
    stdin += chunk;
}).on('end', function() {
    var lines = stdin.split('\n');
    for(var i=0; i<lines.length; i++) {
        process.stdout.write(lines[i]);
    }
});

const fs = require("fs");
const data = fs.readFileSync("/dev/stdin", "utf-8");

function p(data) {
    console.log(data * data)
}

p(data)


// Run Test Cases  Submit Final Answer Minimize side bar
// Challenge Tab - Active
// Test Case Output Tab
// Programming Challenge Description:
// Your task is to build a type-ahead feature for an upcoming product.
//
// When the user enters a word or set of words, we want to be able to "predict" what they're going to type next with some level of accuracy. We've chosen to implement this using the N-Gram algorithm defined here http://en.wikipedia.org/wiki/N-gram.
//
// Your program should return a tuple of predictions sorted high to low based on the prediction score (up to a maximum of three decimal places, or pad with zeroes up to three decimal places i.e. 0.2 should be shown as 0.200), (if predictions share the same score, they are sorted alphabetically.) Words should be split by whitespace with all non-alphanumeric characters stripped off the beginning and end.
//
// Prediction scores are calculated like this:
// Occurrences of a word after an N-gram / total number of words after an N-gram
// e.g. for an N-gram of length 2:
// ONE TWO ONE TWO THREE TWO THREE
// "TWO" has the following predictions:
// THREE:0.666,ONE:0.333
// "THREE" occurred 2 times after a "TWO" and "ONE" occurred 1 time after a "TWO", for a total of 3 occurrences after a "TWO".
//
// Your program will run against the following text. You may hardcode it into your program:
// Mary had a little lamb its fleece was white as snow;
// And everywhere that Mary went, the lamb was sure to go.
// It followed her to school one day, which was against the rule;
// It made the children laugh and play, to see a lamb at school.
// And so the teacher turned it out, but still it lingered near,
// And waited patiently about till Mary did appear.
// "Why does the lamb love Mary so?" the eager children cry;"Why, Mary loves the lamb, you know" the teacher did reply."
// Input:
// Your program should read lines of text from standard input. Each line contains a number followed by a string, separated by a comma. The number is the n-gram length. The string is the text from the user. You will be predicting the text following this string.
// Output:
// For each line of input print a single line to standard output which is the predictions for what the user is going to type next.
// Test 1
// Test Input Download Test Input2,the
// Expected Output Download Test Outputlamb,0.375;teacher,0.250;children,0.125;eager,0.125;rule,0.125
