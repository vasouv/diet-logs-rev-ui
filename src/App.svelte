<script>
    import Router from "svelte-spa-router";

    import Customers from "./components/customers/Customers.svelte";
    import Customer from "./components/customers/Customer.svelte";
    import Appointments from "./components/appointments/Appointments.svelte";
    import NavBar from "./components/navigation/NavBar.svelte";
    import Dashboard from "./components/dashboard/Dashboard.svelte";
    import NotFound from "./components/404/NotFound.svelte";

    let routes = {
        "/": Dashboard,
        "/customers": Customers,
        "/customer/:id": Customer,
        "/appointments": Appointments,
        "*": NotFound
    }

</script>

<main class="container">

    <NavBar/>

    <Router {routes} />

</main>
