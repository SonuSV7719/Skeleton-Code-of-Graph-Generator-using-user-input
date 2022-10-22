// setup 
const data = {
    labels: ["DBMS", "HCI", "WT", "CN", "AI"],
    datasets: [{
      label: 'Subject V/s Marks',
      data: [97, 89, 87, 89, 98],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'   
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  };    
  
  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  
  
  // render init block
  const myChart = new Chart(
    document.getElementById('barChart'),
    config
  );
  
  function graphTitle(title)
  {
      myChart.config.data.datasets[0].label = title.value;
      myChart.update();
  }