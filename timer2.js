const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  } else if (key === '\u0062') {
    console.log("BEEP");
  } else {
    if (!isNaN(key) && key > 0) {
      console.log(`Setting timer for ${key} seconds...`);
      setTimeout(() => {
        console.log("BEEP");
      }, key * 1000);
    }
  }
});


