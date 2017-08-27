function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var trueValues = arr.filter(function(value){
    return Boolean(value) == true;
  });
  return trueValues;
}

bouncer([7, "ate", "", false, 9]);

console.log(Boolean("test"));
console.log(Boolean(false));

