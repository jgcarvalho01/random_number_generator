const button = document.getElementById('generate');
const btn_reset = document.getElementById('reset');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max)) {
        document.querySelector('#result > span').textContent = 'Valores inválidos';
        btn_reset.style.display = 'none';
        return;
    }

    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    document.querySelector('#result > span').textContent = result;

    btn_reset.style.display = 'inline-block';
});

btn_reset.addEventListener('click', function() {
    document.querySelector('#result > span').textContent = '00';
    btn_reset.style.display = 'none';
    minInput.value = '';
    maxInput.value = '';
});