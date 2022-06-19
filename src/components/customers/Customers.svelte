<script>
    let customers = [
        {
            id: 1,
            username: "vasouv",
            email: "vasouv@mail.com"
        },
        {
            id: 2,
            username: "aggela",
            email: "aggela@mail.com"
        },
        {
            id: 3,
            username: "elina",
            email: "elina@mail.com"
        },
        {
            id: 4,
            username: "apostolis",
            email: "apostolis@mail.com"
        }
    ]
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