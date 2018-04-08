module.exports = function(app, db) {

	const twilio = require('twilio');
	
	app.post('/text',(req,res) => {
		// res.send('blahblah'); 
		var accountSid = 'AC4d84cae0c7906cbb2fa772db36c7de9c'; // Your Account SID from www.twilio.com/console
		var authToken = '66d6c6d74f354e47f352e1555cd902d7';   // Your Auth Token from www.twilio.com/console

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

};