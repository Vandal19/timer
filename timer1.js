//// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments
// Edge cases: 1. No numbers are provided, 2. An input is a negative number 3. An input is not a number
const timer = process.argv.slice(2);

for (let sec of timer) {
  if (sec >= 1 && sec !== isNaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
      console.log(`This timer is going off after ${sec} seconds`);
    }, sec * 1000);
  } else {
    console.log('Return error');
  }
}
//// To test
//node timer1.js 10 3 5 15 9 
//node timer1.js 10 3 5 15 -1
//node timer1.js hello
