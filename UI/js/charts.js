window.onload = function() {
  var chart = new CanvasJS.Chart("chartContainer", {
    title: {
      text: "",
      fontFamily: "Roboto",
      fontWeight: "normal"
    },

    legend: {
      verticalAlign: "bottom",
      horizontalAlign: "center"
    },
    data: [
      {
        //startAngle: 45,
        indexLabelFontSize: 8,
        indexLabelFontFamily: "Roboto",
        indexLabelFontColor: "#2ED47A",
        indexLabelLineColor: "#2ED47A",
        indexLabelPlacement: "outside",
        type: "doughnut",
        showInLegend: true,
        dataPoints: [
          { y: 60.0, legendText: "Likes 60%", indexLabel: "Likes 60%" },
          { y: 40.0, legendText: "Dislikes 40%", indexLabel: "Dislikes 40%" }
        ]
      }
    ]
  });

  chart.render();
};
