'use strict';

var ctx = document.getElementById('myChart').getContext('2d');

var parseData = JSON.parse(localStorage.allProducts);
console.log(parseData);
var nameTitle = [];
var clickTitle = [];
var viewTitle = [];

function sendData () {
  for (var i = 0; i < parseData.length; i++) {
    nameTitle.push(parseData[i].imageName);
    clickTitle.push(parseData[i].timesClicked);
    viewTitle.push(parseData[i].timesDisplayed);
  }
}
sendData();

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: nameTitle,
        datasets: [{
            label: '# of Clicks',
            data: clickTitle,
            backgroundColor: 'pink',
        },
      {
        label: '# of Views',
        data: viewTitle,
        backgroundColor: 'blue',
      }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
          }
      }
});
