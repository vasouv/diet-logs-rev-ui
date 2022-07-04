<script>
    import {onMount, onDestroy} from "svelte";
    import {environmentProperties} from "../../environment-properties.js";

    import MeasurementChart from "../MeasurementChart.svelte";

    export let params = {};

    const userEndpoint = `${environmentProperties.backend}/users/${params.id}/info`;

    let selectedCustomer;
    let fullName = "";
    let age = 0;

    async function getCustomer() {
        try {
            let userResponse = await fetch(userEndpoint);
            selectedCustomer = await userResponse.json();

            fullName = `${selectedCustomer.info.name} ${selectedCustomer.info.surname}`;
            age = new Date().getFullYear() - new Date(selectedCustomer.info.dateOfBirth).getFullYear();
        } catch (e) {
            console.error(e);
        }
    }

    onMount(() => {
        getCustomer();
    });

    onDestroy(() => {
        selectedCustomer = {};
    });

    const measurements = [
        { date: "2022-01-31", weight: 110.1, bmi: 37.4 },
        { date: "2022-02-14", weight: 107.8, bmi: 36.1 },
        { date: "2022-06-17", weight: 104.0, bmi: 34.4 }
    ]

</script>

{#if !selectedCustomer}
    No Data
{:else }
    <h1>{fullName.toUpperCase()}</h1>
    <article>
        <header>Basic Information</header>
        <section class="grid">
            <p>First name: {selectedCustomer.info.name}</p>
            <p>Surname: {selectedCustomer.info.surname}</p>
        </section>
        <section class="grid">
            <p>Gender: {selectedCustomer.info.gender}</p>
            <p>Birth: {selectedCustomer.info.dateOfBirth}</p>
        </section>
        <section class="grid">
            <p>Email: {selectedCustomer.email}</p>
            <p>Age: {age}</p>
        </section>
    </article>

    <article>
        <header>Body Information</header>
        <section class="grid">
            <p>Height: {selectedCustomer.info.height} m</p>
            <p>Weight: {selectedCustomer.info.weight} kg</p>
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
{/if}