import { DateHelper } from "../helpers/Date.js";

import { Negotiation } from "../models/Negotiation.js";
import { ListNegotiations } from "../models/ListNegotiations.js";
import { NegotiationsView } from "../views/Negotiations.js";

import { Message } from "../models/Message.js";
import { MessageView } from "../views/Message.js";
import { Bind } from "../helpers/Bind.js";
import { NegotiationService } from "../services/Negotiation.js";

export class NegotiationController {

    constructor() {

        let $ = document.querySelector.bind(document); //bind indica que a função/metodo pertence ao objeto.
        this._date = $("#date");
        this._quantity = $("#quantity");
        this._value = $("#value");

        this._currentSort = "";
        
        // this._listNegotiations = new ListNegotiations(model => {

        //     this._negotiationsView.update(model);
        // });

        this._listNegotiations = new Bind(new ListNegotiations(), new NegotiationsView($("#negotiationsView")), 'add', 'delete', 'order', 'sortReverse');

        // this._listNegotiations = ProxyFactory.create(new ListNegotiations(), ['add', 'delete'], model => {
        //     this._negotiationsView.update(model)
        // });

        // this._negotiationsView.update(this._listNegotiations);

        this._message = new Bind(new Message(), new MessageView($("#messageView")), 'text');
        
        // this._message = ProxyFactory.create(new Message(), ['text'], model => 
        // this._messageView.update(model));
        
        // this._messageView.update(this._message);
    } // evita percorrer o DOM muitas vezes

    _create() {

        return new Negotiation(

            DateHelper.textforDate(this._date.value),
            this._quantity.value,
            this._value.value
        );
    }

    _cleanForm() {

        this._form = document.querySelector("form");

        this._form.reset();
        this._date.focus();
    }

    insert(event) {

        event.preventDefault();

        this._listNegotiations.add(this._create());
        
        this._message.class = "alert alert-success";
        this._message.title = "Status:";
        this._message.text = "Negociação adicionada com sucesso.";        

        this._cleanForm();
    }

    import(event) {

        event.preventDefault();

        let service = new NegotiationService();

        service.getNegotiations()
        .then(negotiations => {

            negotiations.forEach(negotiation => this._listNegotiations.add(negotiation));

            this._message.class = "alert alert-success";
            this._message.title = "Status:";
            this._message.text = "Negociações importadas com sucesso.";
        }) .catch(error => {

            this._message.class = "alert alert-danger";
            this._message.title = "Erro:";
            this._message.text = error;
        })

        // service.getWeekNegotiations()
        // .then(negotiations => {

        //     negotiations.forEach(negotiation => this._listNegotiations.add(negotiation));

        //     this._message.class = "alert alert-info";
        //     this._message.title = "Status:";
        //     this._message.text = "Negociação da semana obtida com sucesso.";
        // }) .catch(error => {

        //     this._message.class = "alert alert-danger";
        //     this._message.title = "Erro:";
        //     this._message.text = error;
        // });

        // service.getNegotiationsWeekPast()
        // .then(negotiations => {

        //     negotiations.forEach(negotiation => this._listNegotiations.add(negotiation));

        //     this._message.class = "alert alert-info";
        // this._message.title = "Status:";
        // this._message.text = "Negociação da semana passada obtida com sucesso.";
        // }) .catch(error => {

        //     this._message.class = "alert alert-danger";
        //     this._message.title = "Erro:";
        //     this._message.text = error;
        // });

        // service.getNegotiationsWeekBeforeLast()
        // .then(negotiations => {

        //     negotiations.forEach(negotiation => this._listNegotiations.add(negotiation));

        //     this._message.class = "alert alert-info";
        //     this._message.title = "Status:";
        //     this._message.text = "Negociação da semana retrasada obtida com sucesso.";
        // }) .catch(error => {

        //     this._message.class = "alert alert-danger";
        //     this._message.title = "Erro:";
        //     this._message.text = error;
        // });
    }

    delete(event) {

        event.preventDefault();

        this._listNegotiations.delete();

        this._message.class = "alert alert-info";
        this._message.title = "Status:";
        this._message.text = "Negociações apagadas com sucesso.";
    }

    order(col) {

        if(this._currentSort == col) {

            this._listNegotiations.sortReverse();
        } else {


            this._listNegotiations.order((a, b) => a[col] - b[col]);
        }
        this._currentSort = col;
    }
}