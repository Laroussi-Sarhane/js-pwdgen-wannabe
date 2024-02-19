console.log('ciao')
const firstName = prompt('scrivi il tuo nome');

const surname = prompt ('scrivi il tuo cognome');

const bestColor = prompt (' scrivi il tuo cololore preferito')

const passwordGenerator = firstName + surname + bestColor + '24';

console.log(firstName, surname, bestColor);
console.log(passwordGenerator);

document.getElementById('nomeutente').innerHTML =`
<p> ciao la tua password   ${passwordGenerator}, </p>
`;

