var display  = document.getElementById("display data");
var colTitle = document.getElementById("column");

var carBtn  = document.getElementById("car button");
var makeBtn = document.getElementById("make button");
var partBtn = document.getElementById("part button");


var request;

carBtn.addEventListener("click", function() {
  request  = new XMLHttpRequest();

  request.open('GET', 'http://localhost:3000/cars/search.json?q=Build');

  request.onload = function() {
    var carData = JSON.parse(request.responseText);
    createHTML("cars", carData);
  };
  request.send();
});

makeBtn.addEventListener("click", function() {
  request = new XMLHttpRequest();

  request.open('GET', 'http://localhost:3000/makes/search.json?q=Build');
  request.onload = function() {
    var makeData = JSON.parse(request.responseText);
    createHTML("makes", makeData);
  };
  request.send();
});

partBtn.addEventListener("click", function() {
  request = new XMLHttpRequest();

  request.open('GET', 'http://localhost:3000/parts/search.json?q=Build');
  request.onload = function() {
    var partData = JSON.parse(request.responseText);
    createHTML("parts", partData);
  };
  request.send();
});

function createHTML(name ,data) {

  var htmlString = "";
  var title = "";

  switch (name) {
    case 'cars' :
      title += "<b>Model</b>";
      for(c = 0; c < data.length; c++) {
        htmlString += "<p>" + data[c].model + "</p>";

      };
      break;

    case 'makes' :
      title += "<b>Make: Country</b>";
      for(c = 0; c < data.length; c++) {
        htmlString += "<p>" + data[c].name + ": " + data[c].country + "</p>";

      };
      break;

    case 'parts' :
      title += "<b>Parts</b>";
      for(c = 0; c < data.length; c++) {
        htmlString += "<p>" + data[c].name + "</p>";

      };
      break;

  }

  colTitle.innerHTML = title;
  display.innerHTML = htmlString;
};
