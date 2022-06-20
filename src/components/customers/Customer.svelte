<script>
    import {onMount, onDestroy} from "svelte";

    import MeasurementChart from "../MeasurementChart.svelte";

    export let params = {};

    let selectedCustomer = {};
    let fullName = "";

    async function getCustomer() {
        let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        selectedCustomer = await userResponse.json();

        // fake full name, gender and date of birth
        let nameList = selectedCustomer.name.split(" ");
        selectedCustomer.name = nameList[0];
        selectedCustomer.surname = nameList[1];
        selectedCustomer.dateOfBirth = "1987-08-04";
        selectedCustomer.gender = Math.random() < 0.5 ? "M" : "F";
        selectedCustomer.height = 1.74;
        selectedCustomer.weight = 110.1;

        fullName = `${nameList[0]} ${nameList[1]}`;
    }

    onMount(() => {
        getCustomer();
    });

    onDestroy(() => {
        selectedCustomer = null;
    });

    const measurements = [
        { date: "2022-01-31", weight: 110.1, bmi: 37.4 },
        { date: "2022-02-14", weight: 107.8, bmi: 36.1 },
        { date: "2022-06-17", weight: 104.0, bmi: 34.4 }
    ]

</script>

<h1>{fullName.toUpperCase()}</h1>

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