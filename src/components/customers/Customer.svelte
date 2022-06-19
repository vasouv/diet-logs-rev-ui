<script>
    import MeasurementChart from "../MeasurementChart.svelte";

    export let params = {};

    const selectedCustomer = {
        name: "Vasilis",
        surname: "Souvatzis",
        gender: "M",
        dateOfBirth: "1987-08-04",
        height: 1.74,
        weight: 110.1
    }

    const measurements = [
        {
            date: "2022-01-31",
            weight: 110.1,
            bmi: 37.4
        },
        {
            date: "2022-02-14",
            weight: 107.8,
            bmi: 36.1
        },
        {
            date: "2022-06-17",
            weight: 104.0,
            bmi: 34.4
        }
    ]

</script>

<h1>Customer {params.id} Page</h1>

<article>
    <header>Basic Information</header>
    <section class="grid">
        <p>First name: {selectedCustomer.name}</p>
        <p>Surname: {selectedCustomer.surname}</p>
    </section>
    <section class="grid">
        <p>Gender: {selectedCustomer.gender}</p>
        <p>Birth: {selectedCustomer.dateOfBirth}</p>
    </section>
</article>

<article>
    <header>Body Information</header>
    <section class="grid">
        <p>Height: {selectedCustomer.height} m</p>
        <p>Weight: {selectedCustomer.weight} kg</p>
    </section>
</article>

<article>
    <header>Measurements</header>
    <table>
        <tr>
            <th>Date</th>
            <th>Weight</th>
            <th>BMI</th>
        </tr>
        {#each measurements as measurement}
            <tr>
                <td>{measurement.date}</td>
                <td>{measurement.weight}</td>
                <td>{measurement.bmi}</td>
            </tr>
        {/each}
    </table>
</article>

<article>
    <header>Measurements Chart</header>
    <MeasurementChart/>
</article>