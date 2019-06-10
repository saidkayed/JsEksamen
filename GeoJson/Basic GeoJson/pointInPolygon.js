const gju = require("geojson-utils");

//pointInPolygon
const Point1 = {"type":"Point", "coordinates":[3,3]}
const Point2 = {"type":"Point", "coordinates":[7,7]}

const Polygon = {"type":"Polygon","coordinates":[[[0,0],[6,0],[6,6],[0,6]]]};

let firstPoint = gju.pointInPolygon(Point1, Polygon);
let secondPoint = gju.pointInPolygon(Point2, Polygon);

console.log("[3,3]",firstPoint);
console.log("[7,7]",secondPoint);

//pointDistance
let distance = gju.pointDistance(Point1, Point2);
console.log("pointDistance =",distance,"meters");

//TestData : http://geojson.io/#map=15/55.7921/12.5608

//Lon/Lat - Intet facit, GeoJson er lon,lat.. eks google maps bruger lat,lon