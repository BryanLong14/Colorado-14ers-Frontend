// const dataAPI = "https://peaceful-crag-92814.herokuapp.com/data"
// const peakClass = "https://peaceful-crag-92814.herokuapp.com/class"
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
    peakRank.innerText = "This peak is the " + peakArray[i].attributes.rank + " highest mountain in the state";
    newPeakCard.appendChild(peakRank);
    var hikeLength = document.createElement("p");
    hikeLength.innerText = "This hike is " + peakArray[i].new_attributes.roundtrip_distance + " miles roundtrip";
    newPeakCard.appendChild(hikeLength);
    // Add link to route description
    var addLink = document.createElement("a");
    addLink.innerText = "Click on this link to go to the Route Description";
    addLink.href = peakArray[i].new_attributes.link;
    newPeakCard.appendChild(addLink);

    peakList.appendChild(newPeakCard);
  }
}
