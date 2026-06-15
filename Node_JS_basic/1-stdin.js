process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  // Keep \r here because the test expects it
  process.stdout.write(`Your name is: ${name}\r`);
});

process.stdin.on('end', () => {
  // Add \n here at the beginning to prevent overwriting the line above
  process.stdout.write('\nThis important software is now closing\n');
});process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  // Strips only the trailing newline character, keeping any inner spacing intact
  const name = data.toString().replace(/\r?\n$/, '');
  process.stdout.write(`Your name is: ${name}\n`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
