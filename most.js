document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("complaints-chart").getContext("2d");

    // Sample data for most complained sectors
    const sectorData = {
        labels: ["Internet", "Electrician", "Plumber", "Warden", "Cleaner"],
        datasets: [
            {
                data: [45, 30, 25, 15, 10],
                backgroundColor: [
                    "#ff5733",
                    "#ffa833",
                    "#33ff57",
                    "#33a3ff",
                    "#b833ff",
                ],
            },
        ],
    };

    const complaintsChart = new Chart(ctx, {
        type: "pie",
        data: sectorData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                position: "bottom",
            },
        },
    });
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