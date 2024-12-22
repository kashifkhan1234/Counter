let count = 0;

const value = document.querySelector('#counter-value');
const increment = document.querySelector('#increment-btn');
const decrement = document.querySelector('#decrement-btn');
const reset = document.querySelector('#reset');

increment.addEventListener('click', () => {
    count++;
    value.textContent = count;
});

decrement.addEventListener('click', () => {
    count--;
    value.textContent = count;
}); 

reset.addEventListener('click', () => {
    count = 0;
    value.textContent = count;   
});

