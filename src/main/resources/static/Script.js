document.addEventListener('DOMContentLoaded', function() {
    // Henter referanse til knapp for kjøp av billett
    const purchaseButton = document.getElementById('purchase');
    // Henter referanse til listen for billetter
    const ticketList = document.getElementById('ticketList');

    // Legger til hendelseslytter for klikk på kjøpsknapp
    purchaseButton.addEventListener('click', function() {
        // Henter data fra skjemaet
        const data = {
            movie: document.getElementById('movie').value,
            quantity: parseInt(document.getElementById('quantity').value),
            firstname: document.getElementById('firstname').value,
            lastname: document.getElementById('lastname').value,
            phonenumber: document.getElementById('phonenumber').value,
            email: document.getElementById('email').value
        };

        // Sender data til serveren for lagring
        fetch('/Lagre', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    // Viser melding hvis billetten ble lagret
                    alert('Billetten ble lagret!');
                    // Oppdaterer visning av billetter etter vellykket lagring
                    displayTickets();
                } else {
                    // Viser feilmelding hvis lagringen mislyktes
                    alert('Noe gikk galt ved lagring av billetten.');
                }
            })
            .catch(error => {
                // Viser feilmelding hvis det oppstod en feil ved lagringen
                console.error('Error:', error);
                alert('Noe gikk galt ved lagring av billetten.');
            });
    });

    // Funksjon for å vise alle billetter
    function displayTickets() {
        // Henter alle billetter fra serveren
        fetch('/api/tickets')
            .then(response => response.json())
            .then(tickets => {
                // Nullstiller listen
                ticketList.innerHTML = '';
                // Legger til hver billett i listen
                tickets.forEach(ticket => {
                    const li = document.createElement('li');
                    li.textContent = `Film: ${ticket.movie}, Antall: ${ticket.quantity}, Navn: ${ticket.firstname} ${ticket.lastname}, Telefon: ${ticket.phonenumber}, E-post: ${ticket.email}`;
                    ticketList.appendChild(li);
                });
            })
            .catch(error => {
                // Viser feilmelding hvis det oppstod en feil ved henting av billetter
                console.error('Error:', error);
            });
    }
});
