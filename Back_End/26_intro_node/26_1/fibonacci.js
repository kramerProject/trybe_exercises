function calculateFibon(n) {
  const initial = [0, 1, 1, 2]

  if (n <= initial.length) initial.slice(0, n + 1);

  for (let i = 3; i < n - 1; i ++ ) {
    let newValue = initial[i] + initial[i-1]
    initial.push(newValue)
  }

  return initial;
}

console.log(calculateFibon(10))