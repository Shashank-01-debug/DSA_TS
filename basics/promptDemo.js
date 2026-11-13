const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("what is your age ", (answer) => {
  let age = Number(answer);
  console.log(age);
  rl.close();
});
