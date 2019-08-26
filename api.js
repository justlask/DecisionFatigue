//enter things to do, randomly pick one
// Do you really want to do one of these things?
// No => bored.api
// Yes => randomly pick one.

document.querySelector("#no").onclick = () => {
  axios.get("https://www.boredapi.com/api/activity").then(data => {
    console.log(data.data.activity);
    createResponseBox();
    document.querySelector("#dothis").innerHTML = `Okay, how about.....<br> ${data.data.activity}`
  })
}


  let tasks = []

document.querySelector("#add").onclick = () => {
  event.preventDefault();
  let response = document.querySelector("#task").value
  console.log(response)
  tasks.push(response);
}




document.querySelector("#yes").onclick = () => {
  let random = Math.floor(tasks.length * Math.random())
  let thing = tasks[random]
  createResponseBox();
  document.querySelector("#dothis").innerHTML = `Let's get this out of the way:<br> ${thing}`
}


function createResponseBox() {
  document.querySelector("#dothis").setAttribute("style", "display: flex; justify-content: center; align-items: center; height: 100px; width: 500px; border: 2px solid black;")
}