// Write your JavaScript code here.
// Remember to pay attention to page loading!

let upPos = 250;
let leftPos = 0;


window.addEventListener("load", function(event) {
  let takeoff = document.getElementById("takeoff");
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  let newHeight = spaceShuttleHeight.innerHTML;
  rocket.style.top = upPos + "px";
  

  takeoff.addEventListener("click", function(event) {
    let isready = confirm("Confirm that the shuttle is ready for takeoff");
    if (isready === true) {
      document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
      document.getElementById("shuttleBackground").style.background = "blue";
      newHeight = spaceShuttleHeight.innerHTML;
      newHeight = Number(newHeight) + 10000;
      spaceShuttleHeight.innerHTML = newHeight;
    }
  })

  let landing = document.getElementById("landing");
  landing.addEventListener("click", function(event) {
    alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.background = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    upPos = 0;
    rocket.style.top = "250px"
  })

  let missionAbort = document.getElementById("missionAbort");
  missionAbort.addEventListener("click", function(event) {
    let shouldAbort = confirm("Confirm that you want to abort the mission.");
    if (shouldAbort === true) {
      document.getElementById("flightStatus").innerHTML = "Mission aborted.";
      document.getElementById("shuttleBackground").style.background = "green";
      document.getElementById("spaceShuttleHeight").innerHTML = 0;
      upPos = 0;
      rocket.style.top = "250px"
    }
  })

  let upButton = document.getElementById("upButton");
  let downButton = document.getElementById("downButton");
  let leftButton = document.getElementById("leftButton");
  let rightButton = document.getElementById("rightButton");

  upButton.addEventListener("click", function(event) {
    debugger;
    let rocket = document.getElementById("rocket");
    upPos -= 10;
    rocket.style.top = upPos + "px";
    newHeight = spaceShuttleHeight.innerHTML;
    newHeight = Number(newHeight) + 10000;
    spaceShuttleHeight.innerHTML = newHeight;
  })

  downButton.addEventListener("click", function(event) {
    let rocket = document.getElementById("rocket");
    upPos += 10;
    rocket.style.top = upPos + "px";
    newHeight = spaceShuttleHeight.innerHTML;
    newHeight = Number(newHeight) - 10000;
    spaceShuttleHeight.innerHTML = newHeight;
  })

  leftButton.addEventListener("click", function(event) {
    let rocket = document.getElementById("rocket");
    leftPos -= 10;
    rocket.style.left = leftPos + "px";
  })

  rightButton.addEventListener("click", function(event) {
    let rocket = document.getElementById("rocket");
    leftPos += 10;
    rocket.style.left = leftPos + "px";
  })
})