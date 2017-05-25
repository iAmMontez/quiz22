function checkIt() {
  // Initialize scores
  var nerd = 0;
  var jock = 0;
  var cHeer = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {9

    if (e.checked) {
      if (e.value == 'nerd') {
        nerd++;
      }
      else if (e.value == 'jock') {
        jock++;
      }
      else if (e.value == 'cHeer') {
        cHeer++;
      }
    }

  }

  // Determine result
  var counts = "Nerd: " + nerd + ", " +
               "Jock: " + jock  + ", " +
               "CHeer: " + cHeer;

  // What is the highest value?
  var max = Math.max(nerd, jock, cHeer);

  // Form a message
  var message;

  if (max == nerd) {
    message = "Pour up a ice cold beer, hop in the chevy in drive to the sunset, Rascal Flatts.";
  }
  else if (max == jock) {
    message = "Aye, aye, aye, aye, yuh, aye, yuh, uh, yuh, yuh, yuh, get off the stage Lil Uzi.";
  }
  else if (max == cHeer) {
    message = "You are lil ol' boring, time consuming, elevator music liking, Dave Brubeck ";
  }

  // Display result
  // doument.getElementById('result').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
}
