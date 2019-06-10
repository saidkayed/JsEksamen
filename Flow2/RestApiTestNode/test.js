const expect = require("chai").expect;
const calc = require("./setup.js");
const fetch = require("node-fetch");
const PORT = 2345;
let server;
const URL = `http://localhost:${PORT}/api/calc/add/`;
describe("Calculator API", function() {

	describe("Testing the basic Calc API", function() {
		it("Should return 8", function() {
			const result = calc.add(4, 4);
			expect(result).to.be.equal(8);
		});
	});

	describe("Testing the REST Calc API", function() {
		before(function(done) {
			calc.calcServer(PORT, function(s) {
				server = s;
			});
			done();
		});

		
		it("Add 4 + 3 should return 7", function(done) {
			this.timeout(12000);
			fetch(URL + "4/3")
				.then(r => r.text())
				.then(function(r) {
					console.log(r);
					expect(r).to.be.equal("7");
					done();
				})
				.catch(function(e) {
					done(e);
                });


                
                after(function(done) {
                    server.close();
                    done();
                });
        
		});
	});
});