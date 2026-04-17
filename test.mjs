console.log("Dummy test");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let shouldFail = false;
if (Math.random() > 0.5) {
  shouldFail = true;
  console.log("Test will fail");
} else {
  console.log("Test will pass");
}

const ms = Math.floor(Math.random() * 1000 * 30);

console.log(`Sleeping for ${ms / 1000}s...`);
await sleep(ms);

if (shouldFail) {
  throw new Error("Dummy test failed!");
}
console.log("Dummy test passed!");
