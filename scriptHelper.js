// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   //Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   if (testInput = "") {
    return "Empty";
   } else if (isNaN(testInput)){
    return "Not a Number";
   } else if (isNaN(testInput)===false) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus=document.getElementById("pilotStatus");
   let copilotStatus=document.getElementById("copilotStatus");
   let fuel=document.getElementById("fuelStatus");
   let cargo=document.getElementById("cargoStatus");

   if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty"){
    alert("Error: One or more fields are blank. Please complete all fields.")
   } else if (validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number" || validateInput(fuelLevel)==="Not a Number" || validateInput(cargoLevel)==="Not a Number"){
    alert("Error: One or more fields contains an invalid entry.")
   } else {
    faultyItems.style.visibility="visible";
    pilotStatus.innerHTML=`${pilot} is prepared for launch!`
    copilotStatus.innerHTML=`${copilot} is also prepared for launch!`
    let launchStatus=document.getElementById("launchStatus");
    if ((fuelLevel<10000) && (cargoLevel<= 10000)){
launchStatus.innerHTML="Shuttle not ready for launch"
launchStatus.style.color="Red"
        fuelStatus.innerHTML="Not enough fuel for launch"
cargoStatus.innerHTML="Mass low enough for launch"
    } else if ((fuelLevel>=10000) && (cargoLevel> 10000)){
        launchStatus.innerHTML="Shuttle not ready for launch"
        launchStatus.style.color="Red"
        fuelStatus.innerHTML="Fuel level sufficient for launch"
        cargoStatus.innerHTML="Mass too high for launch"
    } else if ((fuelLevel<10000) && (cargoLevel>10000)){
        launchStatus.innerHTML="Shuttle not ready for launch"
        launchStatus.style.color="Red"
        fuelStatus.innerHTML="Not enough fuel for launch"
        cargoStatus.innerHTML="Mass too high for launch"
    } else {
        launchStatus.innerHTML="Shuttle not ready for launch"
        launchStatus.style.color="Green"
        fuelStatus.innerHTML="Fuel level sufficient for launch"
        cargoStatus.innerHTML="Mass low enough for launch"
    }
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
