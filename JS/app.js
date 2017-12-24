const mergedAPI = "https://peaceful-crag-92814.herokuapp.com/merged"
const form = document.getElementById('form');
var peakList = document.querySelector(".peak-list");

let difficulty;
let length;
let distance;

form.addEventListener('submit', postForm);

// Objective: Get users's form input search criteria from start.html and return to them a selection of data
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
    .then(fetchData)
}

// Sort through data according to parameters (some peaks come up in two searches)
function fetchData(resp) {
  let peakArray = []
  for (var i = 0; i < resp.length; i++) {
    if (
      resp[i].new_attributes.difficulty === difficulty &&
      (resp[i].new_attributes.distance === distance ||
        resp[i].new_attributes.distance2 === distance) &&
      (resp[i].new_attributes.lengthOfHike === length ||
        resp[i].new_attributes.lengthOfHike2 === length)
    ) {
      peakArray.push(resp[i])
    }

  }
  console.log(peakArray);


  // Populate Answers to peak-list DIV on start.html
  for (var i = 0; i < peakArray.length; i++) {
    var newPeakCard = document.createElement("div");
    newPeakCard.classList.add("form-style-1");
    var peakName = document.createElement("h3");
    peakName.innerText = peakArray[i].attributes.peak_name;
    newPeakCard.appendChild(peakName);
    var peakRank = document.createElement("p");
    peakRank.innerText = "This peak is located in the " + peakArray[i].attributes.range + " and is " + peakArray[i].attributes.elevation + " feet tall. It is the " + peakArray[i].attributes.rank + " highest mountain in the state. The closest towns to the trailhead are: " + peakArray[i].attributes.towns + ".";
    newPeakCard.appendChild(peakRank);
    var addLink = document.createElement("a");
    addLink.innerText = "The hike up the " + peakArray[i].new_attributes.standard_route + " is " + peakArray[i].new_attributes.roundtrip_distance + " miles roundtrip. Click on this link to read about the route description and decide if it is a good hike for you.";
    addLink.href = peakArray[i].new_attributes.link;
    newPeakCard.appendChild(addLink);
    peakList.appendChild(newPeakCard);
    document.body.style.backgroundImage = "url('../Assets/1.png')";
    document.body.style.height = "auto";
  }
}
