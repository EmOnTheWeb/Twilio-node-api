module.exports = function(app, db) {

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		if ('OPTIONS' === req.method) {
	     	//respond with 200
	     	res.sendStatus(200);
		} else {
	    //move on
	        next();
	    }
	});

	const twilio = require('twilio');
	const accountSid = 'ACe3e780ec614854942e7b3cee487d5282'; // Your Account SID from www.twilio.com/console
	const authToken = 'c92d577c0d406d917464b0ea74195823';	// Your Auth Token from www.twilio.com/console
	const serviceId = 'IS3d6a777f378635bca0070859760a3db8'; 
	
	// app.post('/text',(req,res) => { 

	// 	var client = new twilio(accountSid, authToken);

	// 	client.messages.create({
	// 	    body: 'blabalksjdfkbhalksdhblkaslkdjfkdANGUS',
	// 	    to: '+447391654064',  // Text this number
	// 	    from: '+441212854387' // From a valid Twilio number
	// 	})
	// 	.then((message) => res.send(message.sid));
	// }); 

	app.post('/create',(req,res) => {
		console.log(req.body); 
		res.send('hello'); 

	}); 

	app.post('/bindings',(req,res) => {
		console.log(req.body); 
		let body = req.body; 

		let { identity, binding_type, address } = body; 
		console.log('identity',identity); 
		console.log('binding type',binding_type); 
		console.log('address',address); 
	
		var client = new twilio(accountSid, authToken);
		var service = client.notify.services(serviceId);

		service.bindings.create({
		    identity: identity,
		    bindingType: binding_type,
		    address: address
		  }).then(function(binding) {
		    // console.log(binding);
		    res.send(binding); 
		  }).catch(function(error) {
		    // console.log(error);
		    res.send(error); 
		  });
	}); 

	app.post('/sendPush',(req,res) => {
		
		let identity = req.body.identity; 

		console.log('identity:',identity); 
		const client = new twilio(accountSid, authToken);

		const service = client.notify.services(serviceId);

		service.notifications
		  .create({
		    identity: identity,
		    body: 'blabhlabhlahblahb',
		  })
		  .then(notification => {
		    console.log(notification);
		  })
		  .catch(error => {
		    console.log(error);
		  })
		  .done();

	}); 

};