import { View } from "../views/View.js";
import { DateHelper } from "../helpers/Date.js";

export class NegotiationsView extends View {

    constructor(element) {
        
        super(element);
    }

    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th id="data-date">DATA</th>
                        <th id="data-quantity">QUANTIDADE</th>
                        <th id="data-value">VALOR</th>
                        <th id="data-volume">VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.negotiations.map(n => `
                        <tr>
                            <td>${DateHelper.dateforText(n.date)}</td>
                            <td>${n.quantity}</td>
                            <td>${n.value}</td>
                            <td>${n.volume}</td>
                        </tr>
                    `).join("")}
                </tbody>
                
                <tfoot>
                    <td colspan="3"></td>
                    <td>${model.volumeTotal
                    /*
                        (function() {
                        let total = 0;
                        model.negotiations.forEach(n => total += n.volume);
                        return total;
                    })()
                    */
                    }</td>
                </tfoot>
            </table>
        `;
    }
}