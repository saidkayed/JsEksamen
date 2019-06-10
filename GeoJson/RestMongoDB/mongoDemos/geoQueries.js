var mongoose = require("mongoose");
var GameArea = require("../mongooseModels/GameArea");
var Player = require("../mongooseModels/Player");
var gju = require("geojson-utils");

var p = mongoose.connect(
  "mongodb+srv://Tobias:1234@cluster0-pjevw.azure.mongodb.net/gameData?retryWrites=true&w=majority",
  { useNewUrlParser: true, useCreateIndex: true }
);
p.then(con => console.log("------------- Connected -------------"));

setTimeout(() => {console.log("Disconnected");mongoose.disconnect()}, 6000);


async function isPlayerWithin(gameAreaName, playerName, fields) {
  const gameArea = await GameArea.findOne({name:gameAreaName});

  if(gameArea === null){
    throw new Error("GameArea not found");
  }

  //geoWithin's geometry takes the gamearea polygon
  //findOne returns user where Player.location is within gameArea
  return Player.findOne({
    location: {
      $geoWithin : {
        $geometry: gameArea
      }
    },
    name: playerName
    }, fields);
}


//Finds people within dist of [lon,lat] as array
async function findNearbyPlayers(lon, lat, dist, fields) {
  return await Player.find({
    location: {
      $near: {
        $geometry : {type: "Point", coordinates: [lon, lat]},
        $maxDistance: dist,
        $minDistance : 0
      }
    }
  }, fields)
}


//returns distance from [lon,lat] to player with name
async function findDistanceToPlayerWithGJU(lon, lat, name) {
  const player = await Player.findOne({name});
  if(player === null){
    throw new Error(`Player ${name} not found`);
  }
  const point = {type: "Point", coordinates: [lon, lat]};
  const distance = gju.pointDistance(point, player.location);
  return{name, distance};
}

//Tests
(async function runTests(){
  console.log("------------- isPlayerWithin -----------------");
  const helle = await isPlayerWithin("Intro-game","HelleInside",{name:1,_id:0});
  console.log("Helle is Game Area",helle);
  const kurt = await isPlayerWithin("Intro-game","KurtOutside",{name:1, location:1,_id:0});
  console.log("Kurt is Game Area",kurt);

  console.log("------------- findNearbyPlayers, location given is for 'JanInside' --------------");
  const players = await findNearbyPlayers(12.572307586669922, 55.78275147606406,10000,{name:1, _id: 0});
  console.log(players)
  
  console.log("------------- findDistanceToPlayerWithGJU, location given is for 'JanInside' --------------");
  const dist = await findDistanceToPlayerWithGJU(12.572307586669922, 55.78275147606406, "PeterOutside");
  if(dist) console.log(`${dist.name}, Distance: ${dist.distance.toFixed(2)} m.`);
})()