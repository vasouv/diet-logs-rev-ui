<script>
    import {onMount, onDestroy} from "svelte";
    import Chart from "chart.js/auto/auto.js";

    let ctx;
    let measurementChart;

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Measurements',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    onMount(() => {
        ctx = measurementChart.getContext("2d");
        let myChart = new Chart(ctx, config);
    })

    onDestroy(() => {
        ctx = null;
        measurementChart = null;
    })
</script>

<canvas bind:this={measurementChart}></canvas>