function Spinner() {
  const spinnerChar = ['|', '/', '-', '\\', '|'];
  let delay = 100;

  for (const char of spinnerChar) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }
}

Spinner();