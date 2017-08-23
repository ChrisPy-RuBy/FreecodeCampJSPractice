var splitSentence;
var capSplitSentence = [];
var newSentence;


function titleCase(str) {
  var splitSentence = str.split(/\s/);
  for (i = 0; i<splitSentence.length; i++) {
    capSplitSentence.push(" ");
    for (j =0; j<splitSentence[i].length; j++) {
      if ([j] == 0) {
        capSplitSentence.push(splitSentence[i][j].toUpperCase());
      }
      else {
        capSplitSentence.push(splitSentence[i][j].toLowerCase());
      }
    }
  }
  var newSentence = capSplitSentence.join('').toString().trim();
  return newSentence;
}

titleCase("I'm a little tea pot");