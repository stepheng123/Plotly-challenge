
d3.json('./data/samples.json').then(function(data){
  
  var ids = data.samples[0].otu_ids;
  var values = data.samples[0].sample_values.slice(0,10);
  var labels = data.samples[0].otu_labels.slice(0,10);
};

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