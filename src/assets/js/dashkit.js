//
// Plugin instantiation (optional) ==================================
//

'use strict';

// Header
//
// Header card chart

var Header = (function() {

  //
  // Variables
  //

  var $headerChart = $('#headerChart');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var headerChart = new Chart($chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            gridLines: {
              color: ThemeCharts.colors.gray[900],
              zeroLineColor: ThemeCharts.colors.gray[900]
            },
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k';
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Performance',
          data: [0,10,5,15,10,20,15,25,20,30,25,40]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', headerChart);

  };


  //
  // Events
  //

  if ($headerChart.length) {
    init($headerChart);
  }

})();


// Performance
//
// Performance card chart

var Performance = (function() {

  //
  // Variables
  //

  var $performanceChart = $('#performanceChart');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var performanceChart = new Chart($chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Performance',
          data: [0,10,5,15,10,20,15,25,20,30,25,40]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', performanceChart);
  }


  //
  // Events
  //

  if ($performanceChart.length) {
    init($performanceChart);
  }

})();


// Performance alias
//
// Performance alias card chart

var PerformanceAlias = (function() {

  //
  // Variables
  //

  var $performanceChartAlias = $('#performanceChartAlias');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var performanceChartAlias = new Chart($chart, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Performance',
          data: [0,10,5,15,10,20,15,25,20,30,25,40]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', performanceChartAlias);
  }


  //
  // Events
  //

  if ($performanceChartAlias.length) {
    init($performanceChartAlias);
  }

})();


// Orders
//
// Orders card chart

var Orders = (function() {

  //
  // Variables
  //

  var $ordersChart = $('#ordersChart');
  var $ordersSelect = $('[name="ordersSelect"]');


  //
  // Methods
  //

  // Init chart
  function initChart($chart) {

    // Create chart
    var ordersChart = new Chart($chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [25,20,30,22,17,10,18,26,28,26,20,32]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', ordersChart);
  }

  // Toggle select
  function toggleSelect($this) {

    if ( $this.attr('id') == 'ordersSelectAll' ) {

      if ( $this.is(':checked') ) {
         $ordersSelect.prop('checked', true);
       } else {
         $ordersSelect.prop('checked', false)
       }
    }
  }


  //
  // Events
  //

  // Init chart
  if ($ordersChart.length) {
    initChart($ordersChart);
  }

  // Toggle select
  $ordersSelect.on('change', function() {
    toggleSelect($(this));
  });

})();


// Orders alias
//
// Orders alias card chart

var OrdersAlias = (function() {

  //
  // Variables
  //

  var $ordersChartAlias = $('#ordersChartAlias');


  //
  // Methods
  //

  // Init chart
  function init($chart) {

    // Create chart
    var ordersChartAlias = new Chart($chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return '$' + value + 'k'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">$' + yLabel + 'k</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Sales',
          data: [25,20,30,22,17,10,18,26,28,26,20,32]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', ordersChartAlias);
  }


  //
  // Events
  //

  if ($ordersChartAlias.length) {
    init($ordersChartAlias);
  }

})();


// Devices
//
// Devices card chart

var Devices = (function() {

  //
  // Variables
  //

  var $devicesChart = $('#devicesChart');


  //
  // Methods
  //

  // Init chart
  function init($chart) {

    // Create chart
    var devicesChart = new Chart($chart, {
      type: 'doughnut',
      options: {
        tooltips: {
          callbacks: {
            title: function(item, data) {
              var title = data.labels[item[0].index];
              return title;
            },
            label: function(item, data) {
              var value = data.datasets[0].data[item.index];
              var content = '';

              content += '<span class="popover-body-value">' + value + '%</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Desktop', 'Tablet', 'Mobile'],
        datasets: [{
          data: [60, 25, 15],
          backgroundColor: [
            ThemeCharts.colors.primary[700],
            ThemeCharts.colors.primary[300],
            ThemeCharts.colors.primary[100]
          ],
          hoverBorderColor: ( ThemeCharts.colorScheme == 'dark' ) ? ThemeCharts.colors.gray[800] : ThemeCharts.colors.white
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', devicesChart);
  }

  // Generate legend
  function generateLegend($chart) {
    var content = $chart.data('chart').generateLegend();
    var legend = $chart.data('target');
    var $legend = $(legend);

    $legend.html(content);
  }


  //
  // Events
  //

  if ($devicesChart.length) {

    // Init chart
    init($devicesChart);

    // Generate legend
    generateLegend($devicesChart);
  }

})();

// Insulin
//
// Insulin card chart

var Insulin = (function() {

  //
  // Variables
  //

  var $insulineChart = $('#insulineChart');


  //
  // Methods
  //

  // Init chart
  function init($chart) {

    // Create chart
    var insulineChart = new Chart($chart, {
      type: 'doughnut',
      options: {
        tooltips: {
          callbacks: {
            title: function(item, data) {
              var title = data.labels[item[0].index];
              return title;
            },
            label: function(item, data) {
              var value = data.datasets[0].data[item.index];
              var content = '';

              content += '<span class="popover-body-value">' + value + '%</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Insulin Index'],
        datasets: [{
          data: [24, 76],
          backgroundColor: [
            ThemeCharts.colors.primary[700],
            ThemeCharts.colors.gray[300]
          ],
          hoverBorderColor: ( ThemeCharts.colorScheme == 'dark' ) ? ThemeCharts.colors.gray[800] : ThemeCharts.colors.white
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', insulineChart);
  }

  // Generate legend
  function generateLegend($chart) {
    var content = $chart.data('chart').generateLegend();
    var legend = $chart.data('target');
    var $legend = $(legend);

    $legend.html(content);
  }


  //
  // Events
  //

  if ($insulineChart.length) {

    // Init chart
    init($insulineChart);

    // Generate legend
    generateLegend($insulineChart);
  }

})();


// MacroFat
//
// MacroFat card chart

var MacroFat = (function() {

  //
  // Variables
  //

  var $MacroFatChart = $('#MacroFatChart');


  //
  // Methods
  //

  // Init chart
  function init($chart) {

    // Create chart
    var MacroFatChart = new Chart($chart, {
      type: 'doughnut',
      options: {
        tooltips: {
          callbacks: {
            title: function(item, data) {
              var title = data.labels[item[0].index];
              return title;
            },
            label: function(item, data) {
              var value = data.datasets[0].data[item.index];
              var content = '';

              content += '<span class="popover-body-value">' + value + '%</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['DV Fat'],
        datasets: [{
          data: [24, 76],
          backgroundColor: [
            ThemeCharts.colors.green,
            ThemeCharts.colors.gray[300]
          ],
          hoverBorderColor: ( ThemeCharts.colorScheme == 'dark' ) ? ThemeCharts.colors.gray[800] : ThemeCharts.colors.white
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', MacroFatChart);
  }

  // Generate legend
  function generateLegend($chart) {
    var content = $chart.data('chart').generateLegend();
    var legend = $chart.data('target');
    var $legend = $(legend);

    $legend.html(content);
  }


  //
  // Events
  //

  if ($MacroFatChart.length) {

    // Init chart
    init($MacroFatChart);

    // Generate legend
    generateLegend($MacroFatChart);
  }

})();

// MacroProtein
//
// MacroProtein card chart

var MacroProtein = (function() {

  //
  // Variables
  //

  var $MacroProteinChart = $('#MacroProteinChart');


  //
  // Methods
  //

  // Init chart
  function init($chart) {

    // Create chart
    var MacroProteinChart = new Chart($chart, {
      type: 'doughnut',
      options: {
        tooltips: {
          callbacks: {
            title: function(item, data) {
              var title = data.labels[item[0].index];
              return title;
            },
            label: function(item, data) {
              var value = data.datasets[0].data[item.index];
              var content = '';

              content += '<span class="popover-body-value">' + value + '%</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['DV Protein'],
        datasets: [{
          data: [24, 76],
          backgroundColor: [
            ThemeCharts.colors.orange,
            ThemeCharts.colors.gray[300]
          ],
          hoverBorderColor: ( ThemeCharts.colorScheme == 'dark' ) ? ThemeCharts.colors.gray[800] : ThemeCharts.colors.white
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', MacroProteinChart);
  }

  // Generate legend
  function generateLegend($chart) {
    var content = $chart.data('chart').generateLegend();
    var legend = $chart.data('target');
    var $legend = $(legend);

    $legend.html(content);
  }


  //
  // Events
  //

  if ($MacroProteinChart.length) {

    // Init chart
    init($MacroProteinChart);

    // Generate legend
    generateLegend($MacroProteinChart);
  }

})();


// MacroCarbs
//
// MacroCarbs card chart

var MacroCarbs = (function() {

  //
  // Variables
  //

  var $MacroCarbsChart = $('#MacroCarbsChart');


  //
  // Methods
  //

  // Init chart
  function init($chart) {

    // Create chart
    var MacroCarbsChart = new Chart($chart, {
      type: 'doughnut',
      options: {
        tooltips: {
          callbacks: {
            title: function(item, data) {
              var title = data.labels[item[0].index];
              return title;
            },
            label: function(item, data) {
              var value = data.datasets[0].data[item.index];
              var content = '';

              content += '<span class="popover-body-value">' + value + '%</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['DV Carbs'],
        datasets: [{
          data: [10, 90],
          backgroundColor: [
            ThemeCharts.colors.red,
            ThemeCharts.colors.gray[300]
          ],
          hoverBorderColor: ( ThemeCharts.colorScheme == 'dark' ) ? ThemeCharts.colors.gray[800] : ThemeCharts.colors.white
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', MacroCarbsChart);
  }

  // Generate legend
  function generateLegend($chart) {
    var content = $chart.data('chart').generateLegend();
    var legend = $chart.data('target');
    var $legend = $(legend);

    $legend.html(content);
  }


  //
  // Events
  //

  if ($MacroCarbsChart.length) {

    // Init chart
    init($MacroCarbsChart);

    // Generate legend
    generateLegend($MacroCarbsChart);
  }

})();


// Weekly hours
//
// Weekly hours card chart

var WeeklyHours = (function() {

  //
  // Variables
  //

  var $weeklyHoursChart = $('#weeklyHoursChart');


  //
  // Methods
  //

  function init($chart) {

    // Create chart
    var weeklyHoursChart = new Chart($chart, {
      type: 'bar',
      options: {
        scales: {
          yAxes: [{
            ticks: {
              callback: function(value) {
                if ( !(value % 10) ) {
                  return value + 'hrs'
                }
              }
            }
          }]
        },
        tooltips: {
          callbacks: {
            label: function(item, data) {
              var label = data.datasets[item.datasetIndex].label || '';
              var yLabel = item.yLabel;
              var content = '';

              if (data.datasets.length > 1) {
                content += '<span class="popover-body-label mr-auto">' + label + '</span>';
              }

              content += '<span class="popover-body-value">' + yLabel + 'hrs</span>';
              return content;
            }
          }
        }
      },
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          data: [21, 12, 28, 15, 5, 12, 17, 2]
        }]
      }
    });

    // Save to jQuery object
    $chart.data('chart', weeklyHoursChart);
  }


  //
  // Events
  //

  if ($weeklyHoursChart.length) {
    init($weeklyHoursChart);
  }

})();
