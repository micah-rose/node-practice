//Will print "Hello World", then after 2 seconds print exit message

setTimeout(() => process.exit(), 2000);

process.on("exit", () => {
  console.log("Process will exit now. See you later!");
});

console.log("Hello!");
