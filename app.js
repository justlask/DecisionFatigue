//Takes value from input and adds it to an array of items to do
// prints the array of tasks to the page.
let tasks = []

document.querySelector("#add").onclick = () => {
  event.preventDefault();
  let response = document.querySelector("#task").value

  if (response === "") {
    alert("enter a task and then hit enter or click add task")
  }
  else {
    tasks.push(response);
    document.querySelector("#task").value = ""
    document.querySelector("#list ol").innerHTML += `<li>${response}</li>`
  }

}


document.querySelector("#done").onclick = () => {
  document.querySelector("header").setAttribute("style", "display:none")
  document.querySelector("#tasks input").setAttribute("style", "display:none")
  document.querySelector("#tasks button").setAttribute("style", "display:none")
  document.querySelector(".responses").setAttribute("style", "min-height: 60vh; text-align: left")
  document.querySelector("#done").setAttribute("style", "display:none");
  document.querySelector("#answer").setAttribute("style", "display: flex")
}





// No button => gets random activity from bored api, then finds a random gif with that activity.
document.querySelector("#no").onclick = () => {
  axios.get("https://www.boredapi.com/api/activity").then(data => {
    
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=PAisOsDZTQhp368DqHfEh0KoWuAWZi7B&q=${data.data.activity}`).then(data => {
      let random = Math.floor(10 * Math.random())
      let url = data.data.data[random].images.original.url

      document.body.style.backgroundImage =  `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("${url}")`
    })
    document.querySelector("#list").setAttribute("style", "display: none;")
    document.querySelector("#answer").setAttribute("style", "display: none;")
    createResponseBox();
    document.querySelector("#dothis").innerHTML = `We have decided you will ${data.data.activity.toLowerCase()}`
    document.querySelector("#next").setAttribute("style", "display: block;")
  })
}




// Yes button picks a random element in the tasks array and then finds a gif for it.
document.querySelector("#yes").onclick = () => {
  let random = Math.floor(tasks.length * Math.random())
  let thing = tasks[random]
  let imgRando = Math.floor(10 * Math.random());

  if (thing === undefined) {
    createResponseBox();
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=PAisOsDZTQhp368DqHfEh0KoWuAWZi7B&q=judging`).then(data => {
      let url = data.data.data[imgRando].images.original.url
    document.body.style.backgroundImage =  `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${url})`
    })
    document.querySelector("#list").setAttribute("style", "display: none;")
    document.querySelector("#answer").setAttribute("style", "display: none;")
    document.querySelector("#dothis").innerHTML = `You have not added any tasks`
    document.querySelector("#next").setAttribute("style", "display: block;")
    //alert("If you don't tell us any tasks you need to do, how can we help you decide??")
  }
  else {
    createResponseBox();
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=PAisOsDZTQhp368DqHfEh0KoWuAWZi7B&q=${thing}`).then(data => {
      let url = data.data.data[imgRando].images.original.url

      document.body.style.backgroundImage =  `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${url})`
    })
    tasks.splice(random, 1)
    document.querySelector("#list").setAttribute("style", "display: none;")
    document.querySelector("#answer").setAttribute("style", "display: none;")
    document.querySelector("#dothis").innerHTML = `We have decided you will ${thing.toLowerCase()}`
    document.querySelector("#next").setAttribute("style", "display: block;")
  }
}

// gives you your next random task
document.querySelector("#next").onclick = () => {
  let random = Math.floor(tasks.length * Math.random())
  let thing = tasks[random]
  let imgRando = Math.floor(10 * Math.random());

  if (thing === undefined) {
    createResponseBox();
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=PAisOsDZTQhp368DqHfEh0KoWuAWZi7B&q=celebrate`).then(data => {
      let url = data.data.data[imgRando].images.original.url
    document.body.style.backgroundImage =  `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${url})`
    })
    document.querySelector("#list").setAttribute("style", "display: none;")
    document.querySelector("#answer").setAttribute("style", "display: none;")
    document.querySelector("#dothis").innerHTML = ` CONGRATS! You've finished your tasks!`
    document.querySelector("#next").setAttribute("style", "display: none;")
    //alert("If you don't tell us any tasks you need to do, how can we help you decide??")
  }
  else {
    createResponseBox();
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=PAisOsDZTQhp368DqHfEh0KoWuAWZi7B&q=${thing}`).then(data => {
      let url = data.data.data[imgRando].images.original.url

      document.body.style.backgroundImage =  `linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${url})`
    })
    tasks.splice(random, 1)
    document.querySelector("#list").setAttribute("style", "display: none;")
    document.querySelector("#answer").setAttribute("style", "display: none;")
    document.querySelector("#dothis").innerHTML = `We have decided you will ${thing.toLowerCase()}`
    document.querySelector("#next").setAttribute("style", "display: block;")
  }
}




// create the response box
function createResponseBox() {
  document.querySelector("#do").setAttribute("style", "display: flex")
  document.querySelector("#dothis").setAttribute("style", "display: flex; justify-content: center; align-items: center; max-height: 200px; max-width: 600px;")
}

