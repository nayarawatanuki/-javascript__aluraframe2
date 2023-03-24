import { View } from "./View.js";
import { DateHelper } from "../helpers/Date.js";

export class NegotiationsView extends View {

    constructor(element) {
        
        super(element);
    }

    template(model) {
        return `
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