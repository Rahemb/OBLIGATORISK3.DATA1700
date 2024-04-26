document.addEventListener('DOMContentLoaded', function() {
    // Henter referanser til HTML-elementene vi trenger
    const purchaseButton = document.getElementById('purchase'); // Knappen for å kjøpe billett
    const deleteAllButton = document.getElementById('deleteAll'); // Knappen for å slette alle billetter
    const ticketList = document.getElementById('ticketList'); // Listen som viser alle billetter

    // Array for å lagre alle billetter som blir lagt til
    const tickets = [];

    // Funksjon for å legge til en billett
    function addTicket() {
        // Henter verdien fra inputfeltene
        const quantity = document.getElementById('quantity').value; // Antall billetter
        const firstname = document.getElementById('firstname').value; // Fornavn
        const lastname = document.getElementById('lastname').value; // Etternavn
        const phonenumber = document.getElementById('phonenumber').value; // Telefonnummer
        const email = document.getElementById('email').value; // E-postadresse
        const movie = document.getElementById('movie').value; // Valgt film

        // Validerer inputverdiene
        if (!validateQuantity(quantity)) {
            alert('Ugyldig antall'); // Feilmelding hvis antallet er ugyldig
            return;
        }
        if (!validateName(firstname)) {
            alert('Ugyldig fornavn'); // Feilmelding hvis fornavnet er ugyldig
            return;
        }
        if (!validateName(lastname)) {
            alert('Ugyldig etternavn'); // Feilmelding hvis etternavnet er ugyldig
            return;
        }
        if (!validatePhoneNumber(phonenumber)) {
            alert('Ugyldig telfnr'); // Feilmelding hvis telefonnummeret er ugyldig
            return;
        }
        if (!validateEmail(email)) {
            alert('Ugyldig e-post'); // Feilmelding hvis e-postadressen er ugyldig
            return;
        }

        // Legger til billetten i arrayet
        const ticket = {
            movie,
            quantity,
            firstname,
            lastname,
            phonenumber,
            email
        };
        tickets.push(ticket);

        // Oppdaterer visningen av billettene
        displayTickets();

        // Nullstiller inputfeltene
        clearFields();
    }

    // Funksjon for å vise alle billettene
    function displayTickets() {
        ticketList.innerHTML = ''; // Nullstiller listen

        // Går gjennom hvert billettobjekt i arrayet og legger til i listen
        tickets.forEach(function(ticket, index) {
            const li = document.createElement('li');
            // Viser informasjonen om billetten i listen
            li.textContent = `Billett ${index + 1}: Film - ${ticket.movie}, Antall - ${ticket.quantity}, Navn - ${ticket.firstname} ${ticket.lastname}, Telefon - ${ticket.phonenumber}, E-post - ${ticket.email}`;
            ticketList.appendChild(li); // Legger til elementet i listen
        });
    }

    // Funksjon for å nullstille inputfeltene
    function clearFields() {
        document.getElementById('quantity').value = ''; // Nullstiller antall-feltet
        document.getElementById('firstname').value = ''; // Nullstiller fornavn-feltet
        document.getElementById('lastname').value = ''; // Nullstiller etternavn-feltet
        document.getElementById('phonenumber').value = ''; // Nullstiller telefonnummer-feltet
        document.getElementById('email').value = ''; // Nullstiller e-post-feltet
        document.getElementById('movie').value = ''; // Nullstiller film-feltet
    }

    // Funksjon for å validere antallet
    function validateQuantity(quantity) {
        return !isNaN(quantity) && quantity > 0; // Sjekker om antallet er et tall og større enn null
    }

    // Funksjon for å validere navn (kun bokstaver tillatt)
    function validateName(name) {
        return /^[a-zA-Z]+$/.test(name.trim()); // Sjekker om navnet kun inneholder bokstaver
    }

    // Funksjon for å validere telefonnummer (kun tall tillatt)
    function validatePhoneNumber(phoneNumber) {
        return /^\d+$/.test(phoneNumber); // Sjekker om telefonnummeret kun inneholder tall
    }

    // Funksjon for å validere e-postadresse
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Sjekker om epost er gyldig
    }

    // Legger til event listener for kjøp-knappen
    purchaseButton.addEventListener('click', addTicket);

    // Legger til event listener for slett-alle-knappen
    deleteAllButton.addEventListener('click', function() {
        tickets.length = 0; // Tømmer billett-arrayet
        displayTickets(); // Oppdaterer visningen av billetter
    });
});
