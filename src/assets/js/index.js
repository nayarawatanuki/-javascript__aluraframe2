import {NegotiationController} from "./app/controllers/Negotiation.js";

let controller = new NegotiationController();

let create = document.querySelector("[data-create]");
let importNeg = document.querySelector("[data-import]");
let clean = document.querySelector("[data-delete]");

let filterDate = document.querySelector("#data-date");
let filterQuantity = document.querySelector("#data-quantity");
let filterValue = document.querySelector("#data-value");
let filterVolume = document.querySelector("#data-volume");

create.addEventListener("click", event => controller.insert(event));

importNeg.addEventListener("click", event => controller.import(event));

clean.addEventListener("click", event => controller.delete(event));


filterDate.addEventListener("click", () => controller.order('date'));

filterQuantity.addEventListener("click", () => controller.order('quantity'));

filterValue.addEventListener("click", () => controller.order('value'));

filterVolume.addEventListener("click", () => controller.order('volume'));


// let n1 = new Negotiation(new Date(), 5, 700);
// console.log(n1);


// var form = document.querySelector(".form");

// var inputs = [
//     document.querySelector("#date"),
//     document.querySelector("#quantity"),
//     document.querySelector("#value")
// ];

// console.log(inputs);

// var tbody = document.querySelector("table tbody");
// form.addEventListener("submit", function(event) {

//     event.preventDefault();
//     var tr = document.createElement("tr");

//     inputs.forEach(function(input) {
//         var td = document.createElement("td");
//         td.textContent = input.value;
//         tr.appendChild(td);
//     });

//     var tdVolume = document.createElement("td");
//     tdVolume.textContent = inputs[1].value * inputs[2].value;

//     tr.appendChild(tdVolume);

//     tbody.appendChild(tr);

//     form.reset();
//     inputs[0].focus();
// });