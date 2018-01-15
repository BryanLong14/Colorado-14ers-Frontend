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

function postResponse(response) {
  let success= Object.keys(response)[0];
  let question= Object.values(Object.values(response)[0])[0];
  let newResponse= document.createTextNode(success +": " + question);
  responseShow.appendChild(newResponse);
};

function removeResponse() {
  responseShow.innerHTML= "";
};
