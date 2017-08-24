function repeatStringNumTimes(str, num) {
  var newString = ""
  for (var i = 0; i < num; i++) {
    newString += str
  }
  console.log (newString)
}



repeatStringNumTimes("abc", 5)
repeatStringNumTimes("abc", 0)