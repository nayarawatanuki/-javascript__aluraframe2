/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api'),
    path =  require('path')

module.exports  = function(app) {
        
    app.route('/server/negotiations/week')
        .get(api.weekList);
        
    app.route('/server/negotiations/past')
        .get(api.pastList);
        
    app.route('/server/negotiations/before-last')
        .get(api.beforeLastList);  
        
        
    app.route('/server/add-negotiations').get(function(req, res, next) {
        res.sendFile(path.join(__dirname, '../../src/pages', 'post.html'))
    })

    app.route('/server/add-negotiations/send')
        .post(api.registerNegotiation);
}