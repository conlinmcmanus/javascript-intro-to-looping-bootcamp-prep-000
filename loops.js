function forLoop() {
var array = []
for (var i = 0; i < 25; i++) {
  if (i === 0) {
    array.push("This is 1 strange loop")
  } else {
    array = array.push("This is " + i + " strange loops")
    continue;
  }
  return array
}

function whileLoop() {
  while (n > 0) {
  console.log(--n || "done")
}

function doWhileLoop() {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())
    return array
}
