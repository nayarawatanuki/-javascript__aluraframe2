import { NegotiationController } from "../../../server/controllers/Negotiation.js";

let controller = new NegotiationController();

let sendService = document.querySelector("[data-sendService]");

sendService.addEventListener("click", event => controller.post(event));