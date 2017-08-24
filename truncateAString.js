function truncateString(str, num) {
  var spread = "...";
  var trimedArray;
  if (num >= str.length) {
    return str;
  } else if (num >= 3) {
    trimedArray = str.slice(0, num-3).concat(spread);
  }
  else {
    trimedArray = str.slice(0, num).concat(spread);
  }
  return trimedArray;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
truncateString("Peter Piper picked a peck of pickled peppers", 14);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
