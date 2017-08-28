function getIndexToIns(arg, num) {
  var sortArr = arg.sort(function(a,b){
    return a- b;
  });
  var indexOf = (sortArr.length);
  for(i=0; i<sortArr.length; i++) {
    if ( arg[i] < num ) {
      console.log(arg[i], i);
    } else {
      indexOf = i;
      console.log("here", indexOf, i);
      break;
    }
  }
  return indexOf;
}




// getIndexToIns([10, 20, 30, 40, 50], 35); 3
// getIndexToIns([10, 20, 30, 40, 50], 30); 2
// getIndexToIns([40, 60], 50); 1
// getIndexToIns([3, 10, 5], 3); 0
// getIndexToIns([5, 3, 20, 3], 5);
// getIndexToIns([2, 20, 10], 19);
getIndexToIns([2, 5, 10], 15); 3;