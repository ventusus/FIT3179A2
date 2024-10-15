// Embed the map
var vg_1 = "WEEK8HOMEWORK.JSON";
vegaEmbed("#map", vg_1).then(function(result) {
    // Access the Vega view instance for the map
}).catch(console.error);

// Embed the bar chart
var vg_2 = "WEEK10HOMEWORK.JSON";
vegaEmbed("#barchart", vg_2).then(function(result) {
    // Access the Vega view instance for the bar chart
}).catch(console.error);

// Embed the donut chart
var vg_3 = "A2Donut.JSON";
vegaEmbed("#piechart", vg_3).then(function(result) {
    // Access the Vega view instance for the map
}).catch(console.error);

var vg_4 = "A2Donut2.JSON";
vegaEmbed("#piechart2", vg_4).then(function(result) {
    // Access the Vega view instance for the map
}).catch(console.error);


var vg_5 = "A2Stream.JSON";
vegaEmbed("#stream", vg_5).then(function(result) {
    // Access the Vega view instance for the map
}).catch(console.error);