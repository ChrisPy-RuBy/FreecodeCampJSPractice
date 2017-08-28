function mutation(arr) {
  var data = arr[0].toLowerCase().split('');
  var toCheck = arr[1].toLowerCase().split('');
  var checker;
  for (j = 0; j<toCheck.length; j++ ) {
  var present = data.indexOf(toCheck[j]);
  if (present < 0) {
    checker = false;
    break;
  } else {
    checker = true;
  }
  }
  console.log(checker);
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["voodoo", "no"]);
mutation(["Alien", "line"]);

