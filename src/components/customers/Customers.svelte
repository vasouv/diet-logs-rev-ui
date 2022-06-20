<script>
    import {onMount, onDestroy} from "svelte";

    let customers = [];

    async function getCustomers() {
        let usersResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        customers = await usersResponse.json();
    }

    onMount(() => {
        getCustomers();
    })

    onDestroy(() => {
        customers = [];
    })

</script>

<h1>Customers Page</h1>

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