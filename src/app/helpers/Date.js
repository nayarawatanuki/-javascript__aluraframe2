export class DateHelper {

    constructor() {

        throw new Error("Esta classe {DateHelper} não pode ser instanciada.");
    }
    
    static dateforText(date) {
        return date.toLocaleString();
    }
    

    static textforDate(text) {

        if(!/\d{4}-\d{2}-\d{2}/.test(text)) {
            throw new Error("Deve estar no formato YYYY/MM/DD");
        }

        return new Date(text);
    }
}

// exemplo de expressão regular, no caso date:
// (/\d{4}-/\d{2}-\d{2}/) 
// \d = todo/qualquer digito
// \D = qualquer coisa que não digito
// {4} = tamanho de caracter, no caso, digito