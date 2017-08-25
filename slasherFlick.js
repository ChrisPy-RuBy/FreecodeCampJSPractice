
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);
slasher([1, 2, 3], 0);
slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
