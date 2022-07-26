<script>
    let appointments = [
        {
            id: 1,
            date: new Date().toDateString(),
            customer: "vasouv"
        },
        {
            id: 2,
            date: new Date().toDateString(),
            customer: "aggela"
        }
    ]
</script>

<h1>Appointments Page</h1>

<table>
    <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Customer</th>
    </tr>
    {#each appointments as appointment}
        <tr>
            <td>{appointment.id}</td>
            <td>{appointment.date}</td>
            <td>{appointment.customer}</td>
        </tr>
    {/each}
</table>