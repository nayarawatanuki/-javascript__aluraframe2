import { NegotiationController } from "../../app/controllers/Negotiation.js";

let controller = new NegotiationController();

let create = document.querySelector("[data-create]");
let importNeg = document.querySelector("[data-import]");
let clean = document.querySelector("[data-delete]");

create.addEventListener("click", event => controller.insert(event));

importNeg.addEventListener("click", () => controller.import());

clean.addEventListener("click", event => controller.delete(event));

// TABLE
let filterDate = document.querySelector("[data-date]");
let filterQuantity = document.querySelector("[data-quantity]");
let filterValue = document.querySelector("[data-value]");
let filterVolume = document.querySelector("[data-volume]");

filterDate.addEventListener("click", () => controller.order('date'));

filterQuantity.addEventListener("click", () => controller.order('quantity'));

filterValue.addEventListener("click", () => controller.order('value'));

filterVolume.addEventListener("click", () => controller.order('volume'));