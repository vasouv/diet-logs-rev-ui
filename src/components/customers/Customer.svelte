<script>
    import {onMount, onDestroy} from "svelte";
    import {environmentProperties} from "../../environment-properties.js";

    import MeasurementChart from "../MeasurementChart.svelte";

    export let params = {};

    const userEndpoint = `${environmentProperties.backend}/users/${params.id}/info`;
    const measurementsEndpoint = `${environmentProperties.backend}/measurements/${params.id}`;

    let selectedCustomer;
    let fullName = "";
    let age = 0;
    let measurements = [];

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

    async function getMeasurements() {
        try {
            let measurementsResponse = await fetch(measurementsEndpoint);
            measurements = await measurementsResponse.json();
        } catch (e) {
            console.error(e);
        }
    }

    onMount(() => {
        getCustomer();
        getMeasurements();
    });

    onDestroy(() => {
        selectedCustomer = {};
        measurements = [];
    });

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

    {#if measurements.length == 0}
        <article>
            <header>Measurements</header>
            No Data
        </article>
    {:else }
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
{/if}