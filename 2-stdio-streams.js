//Reads in input and echos it back out

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(chunk);
  }
});

//Or
// process.stdin.pipe(process.stdout)
