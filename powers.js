// //*********FIRST ATTEMPT********/

// let flight = document.getElementById("flight")
// let mindReading = document.getElementById("mindreading")
// let xRay = document.getElementById("xray")


// function toggleFlightClass (newClass) {
//     flight.classList.toggle(newClass)
// }

// function toggleMindClass (newClass) {
//     mindReading.classList.toggle(newClass)
// }

// function toggleXRayClass (newClass) {
//     xRay.classList.toggle(newClass)
// }

// function addAll (newClass) {
//     flight.classList.add(newClass)
//     mindReading.classList.add(newClass)
//     xRay.classList.add(newClass)
// }
// function removeAll (newClass) {
//     flight.classList.remove(newClass)
//     mindReading.classList.remove(newClass)
//     xRay.classList.remove(newClass)
// }

// document.querySelector("#activate-xray").addEventListener("click", function () {toggleXRayClass("enabled")})
// document.querySelectorAll("#activate-all").forEach(element => element.addEventListener("click", function () {addAll("enabled")}))
// document.querySelectorAll("#deactivate-all").forEach(element => element.addEventListener("click", function () {removeAll("enabled")}))
// document.querySelector("#activate-flight").addEventListener("click", function () {toggleFlightClass("enabled")})

// document.querySelector("#activate-mindreading").addEventListener("click", function () {toggleMindClass("enabled")})


///////*********SECOND ATTEMPT***TOO MANY LINES OF CODE IN THE FIRST*/


// let flight = document.getElementById("flight")
// let mindReading = document.getElementById("mindreading")
// let xRay = document.getElementById("xray")
// let allPowers = document.querySelectorAll("section")


// const togglePower = (power) => {
//     power.classList.toggle("disabled")
//     power.classList.toggle("enabled")
// }

// document.querySelector("#activate-flight").addEventListener("click", function () {togglePower(flight)})

// document.querySelector("#activate-mindreading").addEventListener("click", function () {togglePower(mindReading)})

// document.querySelector("#activate-xray").addEventListener("click", function () {togglePower(xRay)})

// // document.querySelector("#activate-all").addEventListener("click", function () {
// //     allPowers.forEach(
// //         function (power) {
// //             if (power.classList.contains("enabled") === false) {
// //                 power.classList.toggle("disabled")
// //                 power.classList.toggle("enabled")
// //             }
// //         }
// //     )
// // })
// // document.querySelector("#deactivate-all").addEventListener("click", function () {
// //     allPowers.forEach(
// //         function (power) {
// //             if (power.classList.contains("enabled") === true) {
// //                 power.classList.toggle("disabled")
// //                 power.classList.toggle("enabled")
// //             }
// //         }
// //     )
// // })

// //******ONE FUNCTION TO RULE THEM ALL CHALLENGE*******/
// // You may notice that your code to enable individual powers (not all at once) is very similar. 
// // To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. 
// // (Hint: one way to get started is to use event.target.id.split("-") in your function)


// const onOffPower = function (event) {

//     let power = event.target.id.split("-") //split() method creates an array!!!!

//     //next line of code ensures that an error message won't occur if someone clicks anything but a button
//     if (event.target.id.startsWith("activate") || event.target.id.startsWith("deactivate")) {
//         if (power[1] !== "all") { //if power index one does not equal "all"
//             document.querySelector(`#${power[1]}`).classList.toggle("enabled") //toggles to enabled
//             document.querySelector(`#${power[1]}`).classList.toggle("disabled") //toggles to disabled
//         } else if (power[0] === "activate") { //power index zero equals "activate"
//             let powerList = document.querySelectorAll(".disabled"); //finds all with class of disabled
//             powerList.forEach(power => { //for each loop to run through all the classes 
//                 power.classList.add("enabled") //adds enabled class
//                 power.classList.remove("disabled") //removes disabled class
//             });
//         } else if (power[0] === "deactivate") { //power index zero equals "deactivate"
//             let powerList = document.querySelectorAll(".enabled"); //finds all with class of enabled
//             powerList.forEach(power => {  //for each loop to run through all the classes 
//                 power.classList.add("disabled") //adds disabled class
//                 power.classList.remove("enabled") //removes enabled class
//             });
//         }
//     }
// }

// document.querySelector("#powerList").addEventListener("click", onOffPower) //finds powersection, listens for the click and then invokes the onOffPower function

//***********FINAL ATTEMPT, CHANGES THE CLASS OF TO .POWER ENABLED OR DISABLED like the instructions asked */

const powerHandler = function (event) {
    let powerSwitch = event.target.id.replace("activate-", "") //replaces the activate- and inserts an empty string
    let classesToSwitch = ["disabled", "enabled"]; //an array of two classes
    classesToSwitch.forEach(classToSwitch => {
        document.querySelector(`#${powerSwitch}`).classList.toggle(classToSwitch) 
    });
}

const activateAllPowers = function (event) {
    let powers = document.querySelectorAll(".power")
    powers.forEach(power => {
        power.classList.remove("disabled")
        power.classList.add("enabled")
    });

}

const deactivateAllPowers = function (event) {
    let powers = document.querySelectorAll(".power")
    powers.forEach(power => {
        power.classList.remove("enabled")
        power.classList.add("disabled")
    });

}

document.querySelector("#activate-flight").addEventListener("click", powerHandler)

document.querySelector("#activate-mindreading").addEventListener("click", powerHandler)

document.querySelector("#activate-xray").addEventListener("click", powerHandler)

document.querySelector("#activate-all").addEventListener("click", activateAllPowers)

document.querySelector("#deactivate-all").addEventListener("click", deactivateAllPowers)