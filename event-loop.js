const fs = require('fs');

// IN EVENT-LOOP
setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  // IN EVENT-LOOP
  console.log('I/O finished');
  console.log('-------------------');

  // below is OUT-OFF OF EVENT-LOOP
  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000);
  setImmediate(() => console.log('Immediate 2 finished'));

  process.nextTick(() => console.log('Process.nextTick'));
});

// IN EVENT-LOOP
console.log('Hello from the top-level code');