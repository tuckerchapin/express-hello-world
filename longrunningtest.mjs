const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const ms = 1000 * 60 * 5;
// Math.floor(Math.random() * 1000 * 30);

console.log(`Sleeping for ${ms / 1000}s...`);
await sleep(ms);
// console.log("NOT SLEEPING");
console.log("Done dummy test");
// throw new Error("Dummy test error");
