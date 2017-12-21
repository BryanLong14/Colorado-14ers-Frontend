// const dataAPI = "https://peaceful-crag-92814.herokuapp.com/data"
// const peakClass = "https://peaceful-crag-92814.herokuapp.com/class"
const mergedAPI = "https://peaceful-crag-92814.herokuapp.com/merged"
const form = document.getElementById('form');
const response = document.getElementById("response");
let difficulty;
let length;
let distance;

  form.addEventListener('submit', postForm);

// Objective: Get users's form input search criteria from start.html and return to them a selection of data
  function postForm(event) {
    event.preventDefault();
    difficulty = event.target[0].value;
    length = event.target[1].value;
    distance = event.target[2].value;
    getData();
    console.log(length);
    console.log(distance);
  }


// returning large mergedArray data
function getData () {
  fetch(mergedAPI)
  .then(resp => resp.json())
  .then(fetchData)
}



function fetchData(resp) {
  // console.log(resp[i].new_attributes.difficulty);

  let peakArray = []
  let finalArray = []
  for (var i = 0; i < resp.length; i++) {
    if (
      // resp[i].new_attributes.difficulty === difficulty
      // &&
      resp[i].new_attributes.lengthOfHike === length
      // &&
      // resp[i].new_attributes.distance === distance

    ){
      peakArray.push(resp[i])
    }
  }
  console.log(peakArray)
 }





  // use logic to sort through data - check out app from yesterday
  // use if else statement
