process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  // Strip only the trailing newline/carriage return from the input
  const name = data.toString().replace(/\r?\n|\r$/, '');
  process.stdout.write(`Your name is: ${name}\r`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});