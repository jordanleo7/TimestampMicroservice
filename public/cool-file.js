document.getElementById('convertButton').onclick = function() {
  var data = document.getElementById('stringToConvert').value;
  var APILink = "https://timestamp-ms.herokuapp.com/";
  var dataAPILink = APILink + encodeURIComponent(data);
  var answer = null;
  
  var xhr = new XMLHttpRequest();
  xhr.open("GET", dataAPILink);
  xhr.send(null);
  xhr.onreadystatechange = function () {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  if (xhr.readyState === DONE) {
    if (xhr.status === OK) 
      console.log(xhr.responseText); // 'This is the returned text.'
      answer = xhr.responseText;
      document.getElementById('output').textContent = answer;
    } else {
      console.log('Error: ' + xhr.status); // An error occurred during the request.
      answer = 'Error: ' + xhr.status;
      document.getElementById('output').textContent = answer;
    }
  }

}