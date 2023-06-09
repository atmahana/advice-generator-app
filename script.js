const btn = document.querySelector('.button');
const id = document.querySelector('.id');
const advice = document.querySelector('.advice');
const url = 'https://api.adviceslip.com/advice';
let getData = () => {
    try {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const adviceData = data.slip.advice;
            id.innerText = data.slip.id;
            advice.innerHTML = ` “${adviceData}” `;
        }); 
    } catch(err){
        console.log(err);
    }
}
window.addEventListener('load', getData);
btn.addEventListener('click', getData);