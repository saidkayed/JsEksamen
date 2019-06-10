const expect = require("chai").expect;
const http = require('http');
const app = require('../app');
const fetch = require("node-fetch");
const TEST_PORT = 3344;
const URL = `http://localhost:${TEST_PORT}/api`;
const jokes = require("../model/jokes");
let server;
describe("Verify the Joke API", function() {
    before(function(done){
        server = http.createServer(app);
        server.listen(TEST_PORT,()=>{
            console.log("Server Started")
            done()
        })
    })
    after(function(done){
        server.close();
        done();
    })
    beforeEach(function(){
        jokes.setJokes(["aaa","bbb","ccc"])
    })

    //POST TEST
    it("Should add the joke 'ddd",async function(){
        var init = {
            method: "POST",
            headers : {"content-type": "application/json"},
            body : JSON.stringify({joke: "ddd"})
        }
        await fetch(URL+"/addjoke",init).then(r => r.json());
        
        //Verify result
        expect(jokes.getAllJokes()).lengthOf(4);
        expect(jokes.getAllJokes()).to.include("ddd")
    })


    //UPDATE TEST
    it("should update joke ddd",async function(){
        var init = {
            method: "PUT",
            headers : {"content-type": "application/json"},
            body : JSON.stringify({joke: "eee"})
        }
        await fetch(URL+"/uJoke/3",init).then(r => r.json());
        //Verify result
        expect(jokes.getAllJokes()).lengthOf(4);
        expect(jokes.getJoke(3)).to.be.equal("eee")
    })
 // DELETE TEST
 it("should delete joke from index",async function(){
    var init = {
        method: "DELETE",
            }

    await fetch(URL+"/delete/3",init).then(r => r.json());
    //Verify result
    expect(jokes.getAllJokes()).lengthOf(3);
})

})
