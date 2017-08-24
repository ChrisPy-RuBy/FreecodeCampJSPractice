function truncateString(str, num) {
  var spread = "...";
  var trimedArray = str.slice(0, num-3).concat(spread);
  console.log(trimedArray);
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
