function numberOfRoots(a, b, d) { 
  let c =b ** 2 - 4 * a * d

  if (c > 0) {
    return "2"
  } else if (c < 0) {
    return "0"
  } else {
    return "1"
  }
}

let v = numberOfRoots (1, 2, 3)

console.log(v);