<script>

    let username = "";
    let email = "";
    let password = "";

    let firstName = "";
    let lastName = "";
    let gender = "";
    let birthday = "";
    let height = 0;
    let weight = 0;

    function saveNewCustomer() {

        const basicInfo = {
            username: username,
            email: email,
            password: password
        }

        const additionalInfo = {
            name: firstName,
            surname: lastName,
            gender: gender,
            dateOfBirth: birthday,
            height: height,
            weight: weight
        }

        console.log(basicInfo)
        console.log(additionalInfo)
    }

</script>

<h1>New Customer</h1>

<form on:submit|preventDefault>

    <article>
        <header>Basic Info</header>
        <div class="grid">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" bind:value={username}>
        </div>
        <div class="grid">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" bind:value={email}>
        </div>
        <div class="grid">
            <label for="password">Password</label>
            <input type="text" name="password" id="password" bind:value={password}>
        </div>
    </article>

    <article>
        <header>Additional Info</header>
        <div class="grid">
            <label for="firstName">Name</label>
            <input type="text" name="firstName" id="firstName" bind:value={firstName}>
        </div>
        <div class="grid">
            <label for="lastName">Surname</label>
            <input type="text" name="lastName" id="lastName" bind:value={lastName}>
        </div>
        <div class="grid">
            <label>Gender</label>
            <div class="grid">
                <label for="male"><input type="radio" bind:group="{gender}" name="gender" id="male" value="M">Male</label>
                <label for="female"><input type="radio" bind:group="{gender}" name="gender" id="female" value="F">Female</label>
            </div>
        </div>
        <div class="grid">
            <label for="birthday">Date of Birth</label>
            <input type="date" name="birthday" id="birthday" bind:value={birthday}>
        </div>
        <div class="grid">
            <label for="height">Height</label>
            <input type="number" name="height" id="height" step="0.01" bind:value={height}>
        </div>
        <div class="grid">
            <label for="weight">Weight</label>
            <input type="number" name="weight" id="weight" step="0.1" bind:value={weight}>
        </div>
    </article>

    <button on:click={saveNewCustomer}>New customer</button>

</form>
