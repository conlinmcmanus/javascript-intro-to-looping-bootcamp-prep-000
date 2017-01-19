function forLoop() {
  return Math.random() >= 0.5
}
var array = []
for (var i = 0; i < 25; i++) {
  if (i === 0) {
    array.push("This is 1 strange loop")
    console.log(array);
    break;
  } else {
    array = array.push("This is " + i + " strange loops")
    continue;
  }
}

function whileLoop() {
  return Math.random() >= 0.5
}
  var n = 10
  while (n > 0) {
  console.log(--n || "done")
}

function doWhileLoop() {
  return Math.random() >= 0.5
}
var array = []
var l = array.length
do {
  console.log(l - 1)
} while (l > 0 || doWhileLoop());
