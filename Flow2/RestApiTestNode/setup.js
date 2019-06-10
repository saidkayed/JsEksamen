const express = require("express");
const http = require("http");
const app = express();


//basic calculator API
function add(n1, n2) {
	return n1 + n2;
}
//End of basic Calculator API

//REST Calculator API
function calcServer(port, isStartedCb) {
	app.get("/api/calc/add/:n1/:n2", (req, res, next) => {
		req.setTimeout(12000);
		const n1 = parseInt(req.params.n1);
		const n2 = parseInt(req.params.n2);
		setTimeout(function() {
			const response = add(n1, n2);
			res.send(response.toString());
		}, 2000);

	});
	let server = http.createServer(app);
	server.listen(port, () => {
		isStartedCb(server);
	});
}

module.exports = {
	add,
	calcServer
};