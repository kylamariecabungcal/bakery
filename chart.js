const labels = ['Pandesal', 'Ensaymada', 'Monay', 'Pan de coco', 'Putok', 'Hopia', 'Egg pie', 'Ham & Cheese roll', 'Hot Dog', 'Kabayans'];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [20, 70, 90, 35, 42, 55, 40, 45, 6, 15],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',   
            'rgba(54, 162, 235, 0.2)',   
            'rgba(75, 192, 192, 0.2)',   
            'rgba(255, 159, 64, 0.2)',   
            'rgba(153, 102, 255, 0.2)',  
            'rgba(255, 99, 71, 0.2)',   
            'rgba(255, 215, 0, 0.2)',   
            'rgba(255, 165, 0, 0.2)',    
            'rgba(0, 255, 255, 0.2)',    
            'rgba(34, 193, 195, 0.2)',   
        ],
        borderColor: [
            'rgb(255, 99, 132)',  
            'rgb(54, 162, 235)',  
            'rgb(75, 192, 192)',   
            'rgb(255, 159, 64)',  
            'rgb(153, 102, 255)', 
            'rgb(255, 99, 71)',    
            'rgb(255, 215, 0)',    
            'rgb(255, 165, 0)',   
            'rgb(0, 255, 255)',    
            'rgb(34, 193, 195)',  
        ],
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

// Render the chart
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
