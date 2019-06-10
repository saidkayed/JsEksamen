const winston = require("winston");

//Remember: npm install winston

//This is inspired by this article: http://tostring.it/2014/06/23/advanced-logging-with-nodejs/
//but slightly changed and updated to use the API of the newest version of Winston

var logger = winston.createLogger({
	transports: [
		new winston.transports.File({
			level: "info",
			filename: "./logs/all-logs.log",
			handleExceptions: true,
			json: true,
			maxsize: 5242880, //5MB
			maxFiles: 5,
		}),
		new winston.transports.Console({
			level: "debug",
			handleExceptions: true,
            json: false,
            format: winston.format.combine(winston.format.timestamp(),winston.format.colorize(),winston.format.simple())
		})
	],
	exitOnError: false
});

winston.addColors({
	colors: {
		debug: "red",
        info: "yellow"
	}
});



logger.stream = {
	write: function(message, encoding) {
        logger.info(message);
	}
};

module.exports = logger;