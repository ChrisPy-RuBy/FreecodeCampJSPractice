
function confirmEnding(str, target) {
  var splitString = str.split(" "); 
  var arrLength = splitString.length;
  if(splitString[arrLength-1] == target) {
    console.log(splitString[arrLength-1])
    return true;
  } else {
    return false;
  }
}



confirmEnding("Bastian", "n");
// confirmEnding("Connor", "n");
// confirmEnding("He has to give me a new name", "name")
// confirmEnding("Open sesame", "same")