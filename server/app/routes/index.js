/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/negotiations/week')
        .get(api.weekList);
        
    app.route('/negotiations/past')
        .get(api.pastList);
        
    app.route('/negotiations/before-last')
        .get(api.beforeLastList);  
        
    app.route('/negotiations')
        .post(api.registerNegotiation);          
};