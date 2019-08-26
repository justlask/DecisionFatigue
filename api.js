//enter things to do, randomly pick one
// Do you really want to do one of these things?
// No => bored.api
// Yes => randomly pick one.

document.querySelector("#no").onclick = () => {
  axios.get("https://www.boredapi.com/api/activity").then(data => {
    console.log(data.data.activity)
    
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=PAisOsDZTQhp368DqHfEh0KoWuAWZi7B&q=${data.data.activity}`).then(data => {
      let url = data.data.data[0].images.original.url

      document.body.style.backgroundImage =  `url(${url})`
    })

    createResponseBox();
    document.querySelector("#dothis").innerHTML = `${data.data.activity}`
  })
}


  let tasks = []

document.querySelector("#add").onclick = () => {
  event.preventDefault();
  let response = document.querySelector("#task").value
    document.querySelector("#task").value = ""


  console.log(response)
  tasks.push(response);
  document.querySelector("#answer p").innerHTML = tasks.join(", ")
}




document.querySelector("#yes").onclick = () => {
  let random = Math.floor(tasks.length * Math.random())
  let thing = tasks[random]


  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=PAisOsDZTQhp368DqHfEh0KoWuAWZi7B&q=${thing}`).then(data => {
      let url = data.data.data[0].images.original.url

      document.body.style.backgroundImage =  `url(${url})`
    })

  createResponseBox();
  document.querySelector("#dothis").innerHTML = `${thing}`
}


function createResponseBox() {
  document.querySelector("#dothis").setAttribute("style", "display: flex; justify-content: center; align-items: center; height: 200px; width: 600px;")
}




// PAisOsDZTQhp368DqHfEh0KoWuAWZi7B