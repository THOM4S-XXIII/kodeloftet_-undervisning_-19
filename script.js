// Oppgave: //  Oprett en tom liste. Legg til ting i den listen (for eksempel kjæledyr) med bruk av .push. Bruk .pop for å fjerne siste element, og deretter bruk .push for å 'erstatte' det som ble fjernet.

// 1. Lag tom liste
let kjæledyr = [];

// 2. Legg til elementer
kjæledyr.push('Hund');
kjæledyr.push('Katt');
kjæledyr.push('Fugl');

// Nå er listen: ['Hund', 'Katt', 'Fugl']

// 3. Fjern siste element med .pop
let fjernet = kjæledyr.pop(); // 'Fugl' fjernes

// Nå er listen: ['Hund', 'Katt']

// 4. Legg til et nytt (eller det samme) med .push
kjæledyr.push('Fisk');

// Ferdig! Nå er listen: ['Hund', 'Katt', 'Fisk']
// (Hvis du ville "erstatte" fugl, kunne du gjort kjæledyr.push("Fugl") igjen)

// Skriv ut for å sjekke
document.body.innerHTML = kjæledyr.join(', ');

// Kodeoppsummering:
// let kjæledyr = [];
// kjæledyr.push("Hund");
// kjæledyr.push("Katt");
// kjæledyr.push("Fugl");
// let fjernet = kjæledyr.pop();
// kjæledyr.push("Fisk");
// document.body.innerHTML = kjæledyr.join(', ');
