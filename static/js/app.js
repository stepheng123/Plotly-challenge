d3.json("data/samples.json").then((sampleData) => {
    window.sampleData = sampleData;
      var sampleData= data;
      });

function buildCharts(sample) {

  // fetch the sample data for the plots
  d3.json("data/samples.json").then((data) => {
    var samples= data.samples;
    var resultsarray= samples.filter(sampleobject => sampleobject.id == sample);
    var result= resultsarray[0]
    
    var ids = result.otu_ids;
    var labels = result.otu_labels;
    var values = result.sample_values;


    // Build a Bubble Chart
    var LayoutBubble = {
      margin: { t: 0 },
      xaxis: { title: "Id's" },
      hovermode: "closest",
      };

      var DataBubble = [
      {
        x: ids,
        y: values,
        text: labels,
        mode: "markers",
        marker: {
          color: ids,
          size: values,
          }
      }
    ];

    Plotly.plot("bubble", DataBubble, LayoutBubble);

    //  Build a bar Chart
    
    var bar_data =[
      {
        y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
        x:values.slice(0,10).reverse(),
        text:labels.slice(0,10).reverse(),
        type:"bar",
        orientation:"h"

      }
    ];

    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150 }
    };

    Plotly.newPlot("bar", bar_data, barLayout);
  });

  var washFrequency = data.samples[+index].wfreq;

  // Gauge chart
  
  var trace3 = [{
    domain: {x: [0, 1], y: [0,1]},
    type: "indicator",
    mode: "gauge+number",
    value: washFrequency,
    title: { text: "Belly Button Washes Per Week" },
    gauge: {
      axis: { range: [0, 9], tickwidth: 0.5, tickcolor: "black" },
      bar: { color: "#669999" },
      bgcolor: "white",
      borderwidth: 2,
      bordercolor: "transparent",
      steps: [
        { range: [0, 1], color: "#fff" },
        { range: [1, 2], color: "#e6fff5" },
        { range: [2, 3], color: "ccffeb" },
        { range: [3, 4], color: "b3ffe0" },
        { range: [4, 5], color: "#99ffd6" },
        { range: [5, 6], color: "#80ffcc" },
        { range: [6, 7], color: "#66ffc2" },
        { range: [7, 8], color: "#4dffb8" },
        { range: [8, 9], color: "#33ffad" }

      ],
    }
  }];

  gaugeData = trace3;

  var layout = {
    width: 600,
    height: 500,
    margin: { t: 0, b: 0 }
  };

  Plotly.newPlot("gauge", gaugeData, layout);
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("data/samples.json").then((data) => {
    var sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();