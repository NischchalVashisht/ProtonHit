const express = require('express');
const path = require('path');
//const fetch = require('node-fetch');
const ProtonMail = require('protonmail-api');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));



app.get('/api/Email', async (req, res) => {
	//let endPoint
	let data = req.query;
	console.log(data);
	const pm = await ProtonMail.connect({
		username: 'rohitsingh95598@proton.me',
		password: 'SFDC@123'
	})
	console.log(pm);
	await pm.sendEmail({
		to: 'arun98.cloud@gmail.com',
		subject: 'Send email tutorial',
		body: 'Hello world'
	})
	
	pm.close()

	console.log(data);
	res.send(data);


	console.log('Sent list of items', JSON.stringify(data));
});




const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);



/*

const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
//import fetch from "node-fetch";
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.get('api/sendOTP', function(req, res) {
	let { data } = req.query;
	//let d =  await fetch(data);
	//let sd = await d.text();
	
	console.log(data);
   res.send(data);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); //serving build folder
});

console.log('listening on ',port);
app.listen(port);




*/
