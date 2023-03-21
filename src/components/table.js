import { DateHelper } from "../helpers/Date.js";

export template(model) {
    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
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
                <td>${model.negotiations.reduce((total, n) => total + n.volume, 0.0)
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
