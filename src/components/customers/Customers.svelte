<script>
    import {onMount, onDestroy} from "svelte";

    let customers = [];

    const backend = "http://localhost:8080/users";

    async function getCustomers() {
        try {
            let usersResponse = await fetch(backend);
            customers = await usersResponse.json();
        } catch (e) {
            console.error(e);
        }
    }

    onMount(() => {
        getCustomers();
    })

    onDestroy(() => {
        customers = [];
    })

</script>

<h1>Customers Page</h1>

{#if customers.length == 0}
    No Data
{:else }
    <table>
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
        </tr>
        {#each customers as customer}
            <tr>
                <td>{customer.id}</td>
                <td>{customer.username}</td>
                <td>{customer.email}</td>
                <td><a href="#/customer/{customer.id}">Profile</a></td>
            </tr>
        {/each}
    </table>
{/if}