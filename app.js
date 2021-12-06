// Exercise 1
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// Exercise 2
for (let i = 1; i <= 100; i++) {
  let result = '';

  if (i % 3 === 0) {
    result += 'FIZZ';
  }

  if (i % 5 === 0) {
    result += 'BUZZ';
  }

  if (result !== '') {
    console.log(result);
  }
}
