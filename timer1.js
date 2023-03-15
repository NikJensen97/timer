let repeat = process.argv.slice(2);
console.log(repeat);
for (let y = 0; y < repeat.length; y++) {
  if (repeat[y] > 0 && !isNaN(repeat[y])) {
    setTimeout(() => {
      process.stdout.write('\x07');;
    }, repeat[y] * 1000);
  }
}
// no ding is heard if intervals are less than ~2 seconds apart
