const express = require("express");
const http = require("http");
var app = express();
const gju = require("geojson-utils");

app.get("/", (req, res) => res.send("GeoDemo API"));

const Polygon = {"type":"Polygon","coordinates":[[[0,0],[6,0],[6,6],[0,6]]]};

app.get("/geoapi/isuserinarea/:lon/:lat", (req,res)=>{
    const {lon, lat} = req.params;
    const point = {"type":"Point", "coordinates":[lon, lat]}

    let status = gju.pointInPolygon(point,Polygon)
    let result = {status};
    result.msg = status ? "Point was inside the tested Polygon" :
                          "Point was NOT inside the tested Polygon";

    return res.json(result);
})

function geoServer(port, area, player){
    return new Promise((resolve, reject) =>{
        if(area && player){
            setDataStores(area, player);
        }
        let server = http.createServer(app);
        server.listen(port, ()=>{
            resolve(server)
        })
    })
}

module.exports = geoServer;