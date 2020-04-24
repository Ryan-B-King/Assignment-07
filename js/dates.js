/*eslint-env browser*/

//STEP 1

// let month = window.prompt('Select a month to know how many days it has (use numeric 1-12)');
// let dateVar = new Date(0, month, 0).getDate();
// let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// window.console.log('The month of ' + monthName[month - 1] + ' has ' + dateVar + ' days.');

//STEP 2

// let dateInput = window.prompt('Please type a date in the mm/dd/yyyy format.');
// let month = new Date(dateInput).getMonth();
// let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// window.console.log('The month in your date is: ' + monthName[month] + '.');

//STEP 3

// let dateInput = window.prompt('Please type a date in the mm/dd/yyyy format.');
// let day = new Date(dateInput).getDay();
// if (day === 0 || day === 6) { 
//     window.console.log('This day is on the weekend.');
// } else {
//     window.console.log('This day is NOT on the weekend.');
// };

//STEP 4

// let today = new Date();
// let yesterday = new Date(today);
// yesterday.setDate(yesterday.getDate() - 1);
// window.console.log('Yesterday\'s date is: ' + yesterday + '.');

//STEP 5

// let today = new Date();
// let weekday = new Date (today).getDay();
// let dayOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
// window.console.log(dayOfWeek[weekday]);