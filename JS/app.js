const mergedAPI = "https://peaceful-crag-92814.herokuapp.com/merged"
const form = document.getElementById('form');
var peakList = document.querySelector(".peak-list");

let difficulty;
let length;
let distance;

// Do we need to instantiate peakArray outside function? If so, remove second instance below
let peakArray = [];

form.addEventListener('submit', postForm);

//Get users' form input search criteria from start.html and return to them a selection of data
function postForm(event) {
  event.preventDefault();
  peakList.innerHTML = '';
  difficulty = event.target[0].value;
  length = event.target[1].value;
  distance = event.target[2].value;
  getData();
}

// returning large mergedArray data
function getData() {
  fetch(mergedAPI)
    .then(resp => resp.json())
    .then(resp => {
      fetchData(resp)
      // console.log(resp);
    })
    .catch(err => console.log(err));
  // .then(fetchData)
  // .then(addMarker)
}

// Sort through data according to parameters (some peaks come up in two searches)
function fetchData(resp) {
  for (var i = 0; i < resp.length; i++) {
    if (
      resp[i].new_attributes.difficulty === difficulty &&
      (resp[i].new_attributes.distance === distance ||
        resp[i].new_attributes.distance2 === distance) &&
      (resp[i].new_attributes.lengthOfHike === length ||
        resp[i].new_attributes.lengthOfHike2 === length)
    ) {
      peakArray.push(resp[i])
      document.querySelector('#map').style.display = ""
    }
  }

  // Populate Answers to peak-list DIV on start.html
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
    addLink.innerText = "Click on this link to read about the route description and decide if it is a good hike for you.";
    addLink.href = peakArray[i].new_attributes.link;
    addLink.setAttribute("target", "_blank");
    newPeakCard.appendChild(addLink);
    peakList.appendChild(newPeakCard);
  }
  document.body.style.backgroundImage = "url('../Assets/1.png')";
  document.body.style.height = "auto";
  // Trying to figure out where to close final curly brace. If here, the initMap will load, but how do we get it to then populate with the markers?

  console.log(peakArray);
  // console.log(peakArray[2].attributes.latitude);

  // Create the map here
  initMap()



}


// Creates the Google Map
function initMap() {
  var latlng = new google.maps.LatLng(39.117777, -106.44472);
  var myOptions = {
    zoom: 7,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.SATELITE
  }
  map = new google.maps.Map(document.getElementById("map"), myOptions);
  addMarker(map, peakArray)
}

//
// function addMarker() {
//   var marker, i
//   for (var i = 0; i < peakArray.length; ++i) {
//     var image = 'Assets/MountainFaviconBlue.png'
//     var name = peakArray[i].attributes.peak_name;
//     var elevation = peakArray[i].attributes.elevation;
//     var link = peakArray[i].new_attributes.link;
//     var coordsLat = peakArray[i].attributes.latitude;
//     var coordsLong = peakArray[i].attributes.longitude;
//     var latLng = new google.maps.LatLng(coordsLat, coordsLong);
//     var marker = new google.maps.Marker({
//       title: name,
//       position: latLng,
//       map: map,
//       icon: image,
//     });
//     // Try to set map position in the line below here
//     // map.setCenter(marker.getPosition())
//     // Add Info Window Tags to Markers
//       '<h3>' + name + '</h3>' +
//       '<p>Elevation of ' + elevation + ' feet.</p>' +
//       '</div>'
//     var infowindow = new google.maps.InfoWindow()
//     google.maps.event.addListener(marker, 'click',
//       function(marker, content, infowindow) {
//         return function() {
//           infowindow.setContent(content);
//           infowindow.open(map, marker);
//         };
//       }(marker, content, infowindow));
//   }
// }


// Add Initital Map Markers
function addMarker() {
  var marker, i
  for (var i = 0; i < peakArray.length; ++i) {
    var image = 'Assets/MountainFaviconBlue.png'
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
      icon: image,
    });
    // Try to set map position in the line below here
    // map.setCenter(marker.getPosition())
    // Add Info Window Tags to Markers
    var content = '<div class="info_content">' +
      '<h3>' + name + '</h3>' +
      '<p>Elevation of ' + elevation + ' feet.</p>' +
      '</div>'
    var infowindow = new google.maps.InfoWindow()
    google.maps.event.addListener(marker, 'click', function(marker, content, infowindow) {
      return function() {
        infowindow.setContent(content);
        infowindow.open(map, marker);
      };
    }(marker, content, infowindow));
  }
}
