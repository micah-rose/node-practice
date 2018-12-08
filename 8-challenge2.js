//Print "Hello World" 5 times in one second intervals
//After 5 prints, print "Done" and exit program

let counter = 0;
const intervalId = setInterval(() => {
  console.log("Hello World");
  counter += 1;

  if (counter === 5) {
    console.log("Done");
    clearInterval(intervalId);
  }
}, 1000);
