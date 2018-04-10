module.exports = function(app, db) {

	const twilio = require('twilio');
	
	app.post('/text',(req,res) => {
		// res.send('blahblah'); 
		var accountSid = 'ACe3e780ec614854942e7b3cee487d5282'; // Your Account SID from www.twilio.com/console
		var authToken = 'c92d577c0d406d917464b0ea74195823';   // Your Auth Token from www.twilio.com/console

		var client = new twilio(accountSid, authToken);

		client.messages.create({
		    body: 'Hello from Node',
		    to: '+447444524680',  // Text this number
		    from: '+441212854387' // From a valid Twilio number
		})
		.then((message) => res.send(message.sid));
	}); 

	app.post('/create',(req,res) => {
		console.log(req.body); 
		res.send('hello'); 

	}); 

	app.post('/bindings',(req,res) => {
		console.log(req.body); 
		let body = req.body; 

		let { identity, binding_type, address } = body; 

		var accountSid = 'ACe3e780ec614854942e7b3cee487d5282';
		var authToken = 'c92d577c0d406d917464b0ea74195823';
		var serviceId = 'IS3d6a777f378635bca0070859760a3db8'
	
		var client = new twilio(accountSid, authToken);
		var service = client.notify.services(serviceId);

		service.bindings.create({
		    identity: identity,
		    bindingType: binding_type,
		    address: address
		  }).then(function(binding) {
		    console.log(binding);
		  }).catch(function(error) {
		    console.log(error);
		  });
	}); 

};