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
    message = "You are the king of hypebeasts.";
  }
  else if (max == jock) {
    message = "You wanna be a hypebeast, but you cant because you dont want to spend 1000 dollars on a pair of shoes.";
  }
  else if (max == cHeer) {
    message = "whats a hypebeast?";
  }

  // Display result
  // doument.getElementById('result').innerHTML = counts;
  document.getElementById('result-text').innerHTML = message;
}
