var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/cars/search.json?q=Build');
request.onload = function() {
  console.log(request.responseText);
};
request.send();
