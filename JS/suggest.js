const postURL = "https://peaceful-crag-92814.herokuapp.com/suggestions";
const form1 = document.getElementById('form');
const responseShow = document.getElementById('response');
const textArea = document.querySelector('textarea');
form1.addEventListener('submit', postForm);


function postForm(event) {
  event.preventDefault();
  const newSubmission = new FormData(event.target);
  const submission= {
          "question": newSubmission.get("suggestion"),
        }
  textArea.value = "";
  sendPost(submission);
};

function sendPost(submission){
  fetch(postURL, {
    method: "POST",
    body: JSON.stringify(submission),
    headers: new Headers ({
      "Content-Type": "application/json"
    })
  }).then(response => response.json())
    .then(postResponse)
    .then(setTimeout(removeResponse, 4000))
    .catch(console.error)
};

console.log(error)

function postResponse(response) {
  let success= Object.keys(response)[0];
  let question= Object.values(Object.values(response)[0])[0];
  let newResponse= document.createTextNode(success +": " + question);
  responseShow.appendChild(newResponse);
};

function  removeResponse() {
  responseShow.innerHTML= "";
};


// VERSIOB 2
// function postForm(event) {
//   event.preventDefault();
//   let data = new FormData(event.target);
//   let postObject = {
//     "suggestionn": data.get("suggestion")
//   }
//   postToRecord(postObject)
//   document.querySelector('form').reset()
// }
//
// function postToRecord(obj) {
//   fetch(postURL, {
//       method: "POST",
//       body: JSON.stringify(obj),
//       headers: new Headers({
//         "Content-Type": "application/json"
//       })
//     })
//     .then(response => response.json())
//     .then(responseToStatus);
// }
//
// function responseToStatus(response) {
//   response.error ? displayStatus(response.error.message) : displayStatus(response.message);
// }
//
// function displayStatus(status) {
//   document.querySelector("#status").textContent = status;
// }
//
//
// function displayStatus(status) {
//   document.querySelector("p").textContent = status;
// }





// version 3
// .then(response => response.json())
//   .then(response => appendMessage(response))
// }
//
//
// function appendMessage(response) {
//   let $message = document.createElement('h2')
//   let $main = document.querySelector('main')
//   $message.textContent = response.message
//   $main.appendChild($message)
//   setTimeout(function() {
//     $main.removeChild($main.lastChild)
//   }, 4000)
// }


// fetch(postURL, {
//       method: "POST",
//       body: JSON.stringify({
//         data: {
//           character: data.get("character"),
//           message: data.get("message")
//         }
//       }),
//       headers: new Headers({
//         "Content-Type": "application/json"
//       })
//     }).then(response => response.json())
//     .then(responseToStatus);
// }

// function responseToStatus(response){
// response.error ? displayStatus(response.error.message) : displayStatus(response.message);
// }
//
// function displayStatus(status){
// document.querySelector("#status").textContent = status;
// }

//
// function displayStatus(status) {
//   document.querySelector("p").textContent = status;
// }
//    })
//
//
//   event.preventDefault();
//   const newSubmission = new FormData(event.target);
//   let submission= {
//           "question": newSubmission.get("suggestion"),
//         }
//   textArea.value = "";
//   sendPost(submission);
// };
//
// function sendPost(submission){
//   fetch(postURL, {
//     method: "POST",
//     body: JSON.stringify(submission),
//     headers: new Headers ({
//       "Content-Type": "application/json"
//     })
//   }).then(response => response.json())
//     .then(postResponse)
//     .then(setTimeout(removeResponse, 4000))
//     .catch(console.error)
// };
//
// function postResponse(response) {
//   let success= Object.keys(response)[0];
//   let question= Object.values(Object.values(response)[0])[0];
//   let newResponse= document.createTextNode(success +": " + question);
//   responseShow.appendChild(newResponse);
// };
//
// function  removeResponse() {
//   responseShow.innerHTML= "";
// };
