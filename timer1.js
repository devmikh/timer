const arr = process.argv.slice(2);
for (let time of arr) {
  if (!isNaN(time) && time > 0) {
    setTimeout(() => {
      console.log("BEEP");
    }, time * 1000);
  }
}