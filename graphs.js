// https://developers.google.com/chart/interactive/docs/gallery/piechart#fullhtml

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawGraph);

function drawGraph() {
        var data = google.visualization.arrayToDataTable([
          ['Time', 'Performance'],
          ['1',  100],
          ['2',  11],
          ['3',  66],
          ['4',  90]
        ]);

        var options = {
          title: 'Team Performance',
          hAxis: {titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0},
          series: [{visibleInLegend: false}]
        };

        var chart = new google.visualization.AreaChart(document.getElementById('graphDiv'));
        chart.draw(data, options);
      }

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Personal workload',     7],
    ['',      3]
    ]);
  var data2 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Team workload',     6],
    ['',      7]
    ]);
  var data3 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Communication',     9],
    ['',      1]
    ]);
  var data4 = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Focus',     4],
    ['',      7]
    ]);

  var options = {
    legend: 'none',
    title: 'Personal workload',
    backgroundColor: 'grey',
    // opacity: .1,
    pieHole: 0.8,
    pieSliceText: 'none',
    slices: {
      0: {color : 'darkblue'},
      1: {color: 'transparent'},
    }
  };
  var options2 = {
    legend: 'none',
    title: 'Team workload',
    backgroundColor: 'grey',
    // opacity: .1,
    pieHole: 0.8,
    pieSliceText: 'none',
    slices: {
      0: {color : 'darkblue'},
      1: {color: 'transparent'},
    }
  };
  var options3 = {
    legend: 'none',
    title: 'Communication',
    backgroundColor: 'grey',
    // opacity: .1,
    pieHole: 0.8,
    pieSliceText: 'none',
    slices: {
      0: {color : 'darkblue'},
      1: {color: 'transparent'},
    }
  };
  var options4 = {
    legend: 'none',
    title: 'Focus',
    backgroundColor: 'grey',
    // opacity: .1,
    pieHole: 0.8,
    pieSliceText: 'none',
    slices: {
      0: {color : 'darkblue'},
      1: {color: 'transparent'},
    }
  };
  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
  var chart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));
  chart2.draw(data2, options2);
  var chart2 = new google.visualization.PieChart(document.getElementById('donutchart3'));
  chart2.draw(data3, options3);
  var chart2 = new google.visualization.PieChart(document.getElementById('donutchart4'));
  chart2.draw(data4, options4);
}
