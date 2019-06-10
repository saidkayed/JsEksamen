const mongoose = require("mongoose");

const polygonSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Polygon'],
    required: true
  },
  coordinates: {
    type: [[[Number]]], // Array of arrays of arrays of numbers
    required: true
  },
  name: String
});
//2dsphere index vs 2d index
polygonSchema.index({ loc: "2dsphere" },{ "background": true });

Polygon = mongoose.model("GameArea",polygonSchema);
module.exports = Polygon;