import { Message } from "../../src/app/models/Message.js";
import { MessageView } from "../../src/app/views/Message.js";
import { Bind } from "../../src/app/helpers/Bind.js";
import { NegotiationService } from "../../src/app/services/Negotiation.js";

export class NegotiationController {

    constructor() {

        let $ = document.querySelector.bind(document); //bind indica que a função/metodo pertence ao objeto.

        this._form = $("post_form");

        this._date = $("#post_date");
        this._quantity = $("#post_quantity");
        this._value = $("#post_value");

        this._negotiation = {
            date: this._postDate,
            quantity: this._postQuantity,
            value: this._postValue
        };

        this._service = new NegotiationService();
            
        
        this._messagePost = new Bind(new Message(), new MessageView($("#post_messageView")), 'text');
                
    } // evita percorrer o DOM muitas vezes


    _cleanForm() {

        this._form.reset();
        this._date.focus();
    }

    post(event) {

        event.preventDefault();
        
        console.log("Enviando post");

        this._service.post(this._negotiation, this._cleanForm)
        .then(negotiations => {

            console.log("foi");

            this._messagePost.class = "alert alert-success";
            this._messagePost.title = "Status:";
            this._messagePost.text = "Negociação enviada com sucesso.";
                
        }) .catch(error => {

            this._messagePost.class = "alert alert-danger";
            this._messagePost.title = "Erro:";
            this._messagePost.text = error;
        })
    }
}