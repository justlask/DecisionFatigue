// No button => gets random activity from bored api, then finds a random gif with that activity.
document.querySelector("#no").onclick = () => {
  axios.get("https://www.boredapi.com/api/activity").then(data => {
    console.log(data.data.activity)


    
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=PAisOsDZTQhp368DqHfEh0KoWuAWZi7B&q=${data.data.activity}`).then(data => {
      let random = Math.floor(10 * Math.random())
      let url = data.data.data[random].images.original.url

      document.body.style.backgroundImage =  `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("${url}")`
    })

    createResponseBox();
    document.querySelector("#dothis").innerHTML = `${data.data.activity}`
  })
}


//Takes value from input and adds it to an array of items to do
// prints the array of tasks to the page.
let tasks = []
document.querySelector("#add").onclick = () => {
  event.preventDefault();
  let response = document.querySelector("#task").value
    document.querySelector("#task").value = ""


  console.log(response)
  tasks.push(response);
  document.querySelector("#answer p").innerHTML = tasks.join(", ")
}

// Yes button picks a random element in the tasks array and then finds a gif for it.
document.querySelector("#yes").onclick = () => {
  let random = Math.floor(tasks.length * Math.random())
  let thing = tasks[random]

  let imgRando = Math.floor(10 * Math.random());


  axios.get(`http://api.giphy.com/v1/gifs/search?api_key=PAisOsDZTQhp368DqHfEh0KoWuAWZi7B&q=${thing}`).then(data => {
      let url = data.data.data[imgRando].images.original.url

      document.body.style.backgroundImage =  `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${url})`
    })

  createResponseBox();
  document.querySelector("#dothis").innerHTML = `${thing}`
}



// create the response box
function createResponseBox() {
  document.querySelector("#dothis").setAttribute("style", "display: flex; justify-content: center; align-items: center; max-height: 200px; max-width: 600px;")
}




// mobile stuff
//i wanna, make the gif populate only in the response box
// alert with the gift and task to do







// PAisOsDZTQhp368DqHfEh0KoWuAWZi7B