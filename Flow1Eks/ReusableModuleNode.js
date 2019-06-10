//Exporting/Importing modules is what makes the pattern strong

function exporter(){
    console.log("I have been exported, then imported");
}

var exportMe = 5;

module.exports = {exporter, exportMe};