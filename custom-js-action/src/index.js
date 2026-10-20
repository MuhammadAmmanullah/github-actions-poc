const name = process.env.INPUT_NAME;

if (!name) {
  console.error("The required input 'name' was not provided.");
  process.exit(1);
}

console.log(`Hello, ${name}!`);
