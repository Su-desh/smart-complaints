// Sample data (you should fetch this data from a server)
const data = {
    total: 1000,
    solved: 650,
    pending: 350,
};

// Get the canvas element
const ctx = document.getElementById('complaints-chart').getContext('2d');

// Create the chart
const complaintsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Total Complaints', 'Solved Complaints', 'Pending Complaints'],
        datasets: [{
            label: 'Complaints',
            data: [data.total, data.solved, data.pending],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
const allMenu = document.querySelectorAll('.side-menu:not(.bottom) li');
//active status
allMenu.forEach(item=> {
	const a = item.querySelector('a');
	a.addEventListener('click', function () {
		allMenu.forEach(item1=> item1.classList.remove('active'))
		this.parentElement.classList.add('active');
	})
})


// Toggle sidebar
const menuBar = document.querySelector('#content nav .menu-bar');
const sideBar = document.querySelector('#sidebar');

menuBar.addEventListener('click', function () {
	sideBar.classList.toggle('hide');
})