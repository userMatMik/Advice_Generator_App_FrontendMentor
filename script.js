const btn = document.querySelector('button.advice-generator__btn');
const adviceID = document.querySelector('span.advice-generator__id');
const adviceQuote = document.querySelector('q.advice-generator__quote');
const API_URL = 'https://api.adviceslip.com/advice'; 

console.log(btn);

const fetchAdvice = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

console.log(adviceID);
console.log(adviceQuote);

const generateAdvice = async () => {
    const data = await fetchAdvice();
    const advice = data.slip;
    renderAdvice(advice);
}

const renderAdvice = (generateAdvice) => {
    console.log(generateAdvice)
    adviceID.textContent = `advice #${generateAdvice.id}`
    adviceQuote.textContent = `${generateAdvice.advice}`

}

window.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener('click', generateAdvice)
})
 

fetchAdvice();