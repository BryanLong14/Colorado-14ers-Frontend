const dataAPI = "https://peaceful-crag-92814.herokuapp.com/data"

fetch(dataAPI)
  .then(response => response.json()
  .then(data => ({
          data: data,
          status: response.status
      })
  ).then(res => {
      console.log(res.status)
  }));
