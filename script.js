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




// Oppgave 2: // I den samme listen fra tidligere, fjern det første elementet med .shift. Deretter legg til elementet dere poppet tidligere som første element i denne listen med .unshift.

// Fjern første element med .shift, legg til det vi poppet tidligere med .unshift

let kjæledyr = ['Hund', 'Katt', 'Fisk']; // fra forrige oppgave
let fjernet = 'Fugl'; // det vi poppet tidligere

// 1. Fjern første element
let første = kjæledyr.shift(); // 'Hund' fjernes
// Nå: ['Katt', 'Fisk']

// 2. Legg til 'Fugl' først
kjæledyr.unshift(fjernet);
// Nå: ['Fugl', 'Katt', 'Fisk']

// Sjekk resultatet med:
document.body.innerHTML = kjæledyr.join(', ');

// Kodeoppsummering:
// let kjæledyr = ['Hund', 'Katt', 'Fisk'];
// let fjernet = 'Fugl';
// let første = kjæledyr.shift();
// kjæledyr.unshift(fjernet);
// document.body.innerHTML = kjæledyr.join(', ');


// Oppgave 3: Lag to lister av matvarer. En handlet av mamma, en handlet av pappa. Slå den sammen med .concat, deretter ta å finn en spesifikk matvare med .includes. Finn også ut av dens posisjon med .indexOf. Lag en conditional som sjekker om matvarene er i listen med .includes. hvis sant, log ut "(navn på matvaren) er i listen av matvarer".

//To matvarelister (mamma og pappa), slå dem sammen, sjekk om matvare finnes, finn posisjon, og log beskjeden hvis sant

// 1. Lag to lister
let mammaVarer = ['brød', 'smør', 'ost'];
let pappaVarer = ['juice', 'epler', 'melk'];

// 2. Slå sammen med .concat
let handleliste = mammaVarer.concat(pappaVarer);
// handleliste = ['brød','smør','ost','juice','epler','melk']

// 3. Finn spesifikk matvare med .includes
let søkMatvare = 'epler'; // kan endres...
let finnes = handleliste.includes(søkMatvare);

// 4. Finn posisjonen med .indexOf
let posisjon = handleliste.indexOf(søkMatvare); // eks: 4

// 5. Lag en conditional og log hvis matvaren er i listen
if (finnes) {
  console.log(`${søkMatvare} er i listen av matvarer (posisjon: ${posisjon})`);
} else {
  console.log(`${søkMatvare} er IKKE i listen av matvarer`);
}

// Kode kan brukes slik med hvilken som helst matvare du søker etter (endre søkMatvare)