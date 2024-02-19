console.log('ciao')
const firstName = prompt('scrivi il tuo nome');

const surname = prompt ('scrivi il tuo cognome');

const bestColor = prompt (' scrivi il tuo cololore preferito')

const fullName = firstName + surname + bestColor;

console.log(firstName, surname, bestColor);

document.getElementById('nomeutente').innerHTML =`
<p> ciao  ${fullName}, </p>
`;

