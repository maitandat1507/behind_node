const fs = require('fs')

// IN EVENT-LOOP
setTimeout(() => console.log("Timer 1 finished"), 0)
setImmediate(() => console.log("Immediate 1 finished"))

fs.readFile('test-file.txt', () => {
  // IN EVENT-LOOP
  console.log('I/O finished')
  console.log('-----------')

  setTimeout(() => console.log('Timer 2 finished'), 0)
  setImmediate(() => console.log('Immediate 2 finished'))
  setTimeout(() => console.log('Timer 3 finished'), 3000)

  process.nextTick(() => console.log('From nextTick come later'))
})

// IN EVENT-LOOP
// process.nextTick(() => console.log('From nextTick outside'))
console.log('Hello from the top-level code')