const resp = mergedArray;
const mergedAPI = "https://peaceful-crag-92814.herokuapp.com/merged";
const form = document.getElementById("form");
var peakList = document.querySelector(".peak-list");

var difficulty;
var length;
var distance;
var peakArray = [];
var marker;
var mountainImage = "Assets/MountainFaviconBlue.png";

//Get form input criteria from search.html
form.addEventListener("submit", postForm);
function postForm(event) {
  event.preventDefault();
  peakArray = [];
  peakList.innerHTML = "";
  difficulty = event.target[0].value;
  length = event.target[1].value;
  distance = event.target[2].value;
  getData();
}

// Access large mergedArray database
function getData() {
    fetch(mergedAPI)
      .then(resp => resp.json())
      .then(resp => {
  fetchData(resp);
   })
      .catch(err => console.log(err));
}

// Sort through returned mergedArray database according to user's input parameters (some peaks come up in two searches)
function fetchData(resp) {
  for (var i = 0; i < resp.length; i++) {
    if (
      resp[i].new_attributes.difficulty === difficulty &&
      (resp[i].new_attributes.distance === distance ||
        resp[i].new_attributes.distance2 === distance) &&
      (resp[i].new_attributes.lengthOfHike === length ||
        resp[i].new_attributes.lengthOfHike2 === length)
    ) {
      peakArray.push(resp[i]);
      document.querySelector("#map").style.display = "";
    }
  }
  createPeakCard()
  initMap()
}

// Populate returned data to start.html by creating a newPeakCard for each returned response
function createPeakCard() {
  for (var i = 0; i < peakArray.length; i++) {
    var newPeakCard = document.createElement("div");
    newPeakCard.classList.add("form-style-1");
    var peakName = document.createElement("h3");
    peakName.innerText = peakArray[i].attributes.peak_name;
    newPeakCard.appendChild(peakName);
    var peakRank = document.createElement("p");
    peakRank.innerText = "This peak is located in the " + peakArray[i].attributes.range +
      " and is " + peakArray[i].attributes.elevation +
      " feet tall. It is the " + peakArray[i].attributes.rank +
      " highest mountain in the state. The closest towns to the trailhead are: " + peakArray[i].attributes.towns +
      ". The hike up the " + peakArray[i].new_attributes.standard_route +
      " is the standard route. It is " + peakArray[i].new_attributes.roundtrip_distance +
      " miles roundtrip and is a class " + peakArray[i].new_attributes.class +
      " hike.";
    newPeakCard.appendChild(peakRank);
    var addLink = document.createElement("a");
    addLink.innerText = "Read the route description here.";
    addLink.href = peakArray[i].new_attributes.link;
    addLink.setAttribute("target", "_blank");
    newPeakCard.appendChild(addLink);
    peakList.appendChild(newPeakCard);
  }
  document.body.style.backgroundImage = "url('../Assets/1.png')";
  document.body.style.height = "auto";
  console.log(peakArray);
}

// The Google Map Logic
function initMap() {
  var latlng = new google.maps.LatLng(39.117777, -106.44472);
  var myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: "terrain"
  };
  map = new google.maps.Map(document.getElementById("map"), myOptions);
  addMarker(map, peakArray);
}

// Add map markers based on returned search criteria
function addMarker() {
  for (var i = 0; i < peakArray.length; ++i) {
    var name = peakArray[i].attributes.peak_name;
    var elevation = peakArray[i].attributes.elevation;
    var link = peakArray[i].new_attributes.link;
    var coordsLat = peakArray[i].attributes.latitude;
    var coordsLong = peakArray[i].attributes.longitude;
    var latLng = new google.maps.LatLng(coordsLat, coordsLong);
    var marker = new google.maps.Marker({
      title: name,
      position: latLng,
      map: map,
      icon: mountainImage
    });
    let content =
      "<div class=\"info_content\">" +
      "<h3>" +
      name +
      "</h3>" +
      "<p>Elevation of " +
      elevation +
      " feet.</p>" +
      "</div>";
    let infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(
      marker,
      "click",
      (function(marker, content, infowindow) {
        return function() {
          infowindow.close();
          infowindow.setContent(content);
          infowindow.open(map, this);
        };
      })(marker, content, infowindow)
    );
  }
}
