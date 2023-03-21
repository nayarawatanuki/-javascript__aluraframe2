/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var currentDate = new Date();
var pastDate = new Date();
pastDate.setDate(currentDate.getDate() - 7);
var beforeLastDate = new Date();
beforeLastDate.setDate(currentDate.getDate() - 14);

var negotiations = [
      { date : currentDate, quantity : 1, value : 150},
      { date : currentDate, quantity : 2, value : 250},
      { date : currentDate, quantity : 3, value : 350},
      { date : pastDate, quantity : 1, value : 450},
      { date : pastDate, quantity : 2, value : 550},
      { date : pastDate, quantity : 3, value : 650},
      { date : beforeLastDate, quantity : 1, value : 750},
      { date : beforeLastDate, quantity : 2, value : 950},
      { date : beforeLastDate, quantity : 3, value : 950}
    ];


api.weekList = function(req, res) {
    var currentNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date > pastDate;
    });
    res.json(currentNegotiations);
};

api.pastList = function(req, res) {
   
   var pastNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date < currentDate && negotiation.date > beforeLastDate;
    });
	setTimeout(function() {
		res.json(pastNegotiations);	
	}, 500);
    
};

api.beforeLastList = function(req, res) {

   var beforeLastNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date < pastDate;
    });
    res.json(beforeLastNegotiations);
    
};

api.registerNegotiation = function(req, res) {

   console.log(req.body);
   req.body.data = new Date(req.body.data.replace(/-/g,'/'));
   negotiations.push(req.body);
   res.status(200).json("Negociação recebida");
};



module.exports = api;