exports.render = function(req, res) {

	if(req.session.lastVisit) {
		console.log('I last visited at ' + req.session.lastVisit);
	}

	req.session.lastVisit = new Date();

	//res.send("Hello World");	
	res.render('index', {
		title: "Hello World"
	});
};