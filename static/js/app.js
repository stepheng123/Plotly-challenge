
d3.json("samples.json").then(data =>{ 
    var values = data.samples.sample_values;
    var ids = data.samples.otu_ids;
    var labels = data.samples.otu_lables;


// Trace1 for the Data
var trace1 = {
    x: values
    y: ids
    text: labels
    name: "top 10 OTUs found in that individual",
    type: "bar"
    orientation: 'h'
  };

  // Combining both traces
var data = [trace1];

// Render the plot to the div tag with id "plot"
Plotly.newPlot("bar", data);

});


// // On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   var data = [];

//   if (dataset == 'us') {
//       data = us;
//   }
//   else if (dataset == 'uk') {
//       data = uk;
//   }
//   else if (dataset == 'canada') {
//       data = canada;
//   }
//   // Call function to update the chart
//   Plotly.restyle("pie", "values", [data]);
// }