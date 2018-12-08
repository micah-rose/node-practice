//Print "Hello after 4 seconds"
//Then print "Hello after 8 seconds"

const theOneFunc = delay => {
  console.log("Hello after " + delay + " seconds");
};

setTimeout(theOneFunc, 4 * 1000, 4);
setTimeout(theOneFunc, 8 * 1000, 8);
