function factional(n) {
  if (n != 0) {
    return n * factional(n - 1);
  }
  return 1;
}

console.log(factional(5));
