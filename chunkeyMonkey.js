function chunkArrayInGroups(arr, size) {
  var subArr = [];
  for (var i = arr.length ; i > 0; ) {
    subArr.push(arr.slice(i-size,i));
    i -= size;
    console.log(subArr);
  }
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

