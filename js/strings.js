/*eslint-env browser*/

//STEP 1

// const name = window.prompt('What is your name?');
// window.alert('Your name has the character length of ' + name.length + '.');

//STEP 2

// function nameInput() {
//     name = window.prompt('What is your name?');
//     if (name.length === 0) {
//         window.alert('Sorry you did not enter a valid name.  Try Again.');
//         nameInput();
//     } else {
//         return name;
//     };
// };

// function nameChar() {
//     char = Number(window.prompt(name + ' has the character length of ' + name.length + '.\n' + 
//                          'Pick a # from 1-' + name.length + '.'));
//     if (char === 'null' || char > name.length || char <= 0) {
//         window.alert('Sorry you did not enter a valid #.  Try Again.');
//         while (char === 'null' || char > name.length || char <= 0) {
//             nameChar() ;
//         };
//     } else {
//         return char;
//     };
// };

// function nameAlert() {
//     charNumber =  name.charAt(char-1);
//     window.alert('The # you selected represents the letter: ' + charNumber);
// };

// function main() {
//     let name;
//     let char;
//     let charNumber;

//     nameInput();
//     nameChar();
//     nameAlert();
// };
// main();

//STEP 3

// let fName = window.prompt('What is your first name?');
// let lName = ' ' +  window.prompt('What is your last name?');
// window.alert('Your name is: ' + fName.concat(lName) + '.');

//STEP 4

// let text = 'The quick brown fox jumps over the lazy dog';
// window.alert(text.indexOf('fox'));

//STEP 5

// let text = 'The quick brown fox jumps over the lazy fox';
// window.alert(text.lastIndexOf('fox'));

//STEP 6

// let text = 'The quick brown fox jumps over the lazy dog';
// let name = window.prompt('What is your full name?');
// window.alert(text.replace('the lazy dog', name));

//STEP 7

// let text = 'The quick brown fox jumps over the lazy dog';
// let input = window.prompt('Choose a word from: ' + text);


// if (text.search(input) === -1 || input === '') {
//     window.alert('Input is invalid. Try again.');
// } else {
//     window.alert(text.search(input));
// };

//STEP 8

// let old_string = 'The quick brown fox jumps over the lazy dog';
// let new_string = old_string.slice(30, 43);
// window.alert(new_string.toUpperCase());

//STEP 9

// let text = '     THE QUICK BRONW FOX JUMPS OVER THE LAZY DOG     ';
// window.alert(text.toLowerCase().trim());

//STEP 10

// let text = 'the quick brown fox jumps over the lazy dog';
// let text2 = text.slice(1, 43);
// let text3 = text.slice(0, 1).toUpperCase();
// window.alert(text3.concat(text2));