const express = require("express");
const http = require("http");
const app = express();
const gju = require("geojson-utils");

app.get("/", (req, res) => res.send("Geo Demo!"));



function geoServer(port,area,players) {
    return new Promise((resolve, reject) => {
      if(area && players){
        setDataStores(area,players)
      }
      let server = http.createServer(app);
      server.listen(port, () => {
        resolve(server);
      });
    });
  }
  module.exports = geoServer;