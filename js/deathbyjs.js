/*eslint-env browser*/

//STEP 1

// function main() {

//     takeInput();
//     window.console.log('The alphbetized version of your word is: ' + joinInput + '.');

// };
// main();

// function takeInput() {
//     let input = window.prompt('Type a word to show its letters alphabetized.');   
//     splitInput = input.split('');
//     reverseInput = splitInput.sort();
//     joinInput = reverseInput.join('');
//     return joinInput;
// };

//STEP 2

// function main() {
//     let text = window.prompt('Enter some text.');
//     window.console.log(getText(text));
// };
// main();

// function getText(text) {
//     let i = 0;
//     let array2 = [];

//     let splitText = text.split(' ');

//     for (i; i < splitText.length; i++) {
//         array2.push(splitText[i].charAt(0).toUpperCase() + splitText[i].slice(1));
//     };
    
//     return array2.join(' ');
// };

//STEP 3

// function vowelChecker(text) {
//     let i = 0;
//     let vowelList = 'aeiouAEIOU';
//     let count = 0;

//     for(i; i < text.length; i++) {
//         if (vowelList.indexOf(text[i]) !== -1) {
//             count += 1;
//         };
//     };
//     return count;
// }
// let input = window.prompt('Enter text');
// console.log('\'' + input + '\'' + ' has ' + vowelChecker(input) + ' vowels.');

//STEP 4

// function main() {
//     let text = Number(window.prompt('Enter a # length for random generator'));
//     window.console.log([...Array(text)].map(i=>(~~(Math.random()*36)).toString(36)).join(''));
// };
// main();

//STEP 5

// function main() {
//     let list;
//     let array = [];
//     list = window.prompt('Write a list of countries to find out which has the longest name.');
//     array = list.split(',');
//     window.console.log(countryList(array));
// };
// main();

// function countryList(list) {
//     return list.reduce(function(lname, country) {
//         return lname.length > country.length ? lname : country;
//     }, "");
// };