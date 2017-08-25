function chunkArrayInGroups(arr, size) {
  var subArr = [];
  var clipValue = 0;
  for (var i = 0; i > arr.length; ) {
    if (i >= size) {
      clipValue = i+size;
    } else {
      clipValue = arr.length;
    }
    subArr.push(arr.slice(clipValue, i));
    i = clipValue;
}
  console.log (subArr.reverse());
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
chunkArrayInGroups([0, 1], 4);
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

