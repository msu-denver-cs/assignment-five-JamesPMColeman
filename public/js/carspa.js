var display = document.getElementById("display data");

var carBtn  = document.getElementById("car button");
var makeBtn = document.getElementById("make button");
var partBtn = document.getElementById("part button");

carBtn.addEventListener("click", function() {
  var request = new XMLHttpRequest();

  request.open('GET', 'http://localhost:3000/cars/search.json?q=Build');
  request.onload = function() {
    var carData = JSON.parse(request.responseText);
    createHTML("cars", carData);
  };
  request.send();
});

makeBtn.addEventListener("click", function() {
  var request = new XMLHttpRequest();

  request.open('GET', 'http://localhost:3000/makes/search.json?q=Build');
  request.onload = function() {
    var makeData = JSON.parse(request.responseText);
    createHTML("makes", makeData);
  };
  request.send();
});

partBtn.addEventListener("click", function() {
  var request = new XMLHttpRequest();

  request.open('GET', 'http://localhost:3000/parts/search.json?q=Build');
  request.onload = function() {
    var partData = JSON.parse(request.responseText);
    createHTML("parts", partData);
  };
  request.send();
});

function createHTML(name ,data) {
  var htmlString = "";

  switch (name) {
    case 'cars' :
      for(c = 0; c < data.length; c++) {
        htmlString += "<p>" + data[c].model + "</p>";
      };
      break;

    case 'makes' :
      for(c = 0; c < data.length; c++) {
        htmlString += "<p>" + data[c].name + " product of " + data[c].country + "</p>";
      };
      break;

    case 'parts' :
      for(c = 0; c < data.length; c++) {
        htmlString += "<p>" + data[c].name + "</p>";
      };
      break;
  }

  display.insertAdjacentHTML("beforeend", htmlString);
  htmlString = "";
};
