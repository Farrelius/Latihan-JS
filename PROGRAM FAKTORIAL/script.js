const count = document.getElementById('count');
const hasil = document.getElementById('Hasil');

count.addEventListener('click', function() {
    const number = parseInt(document.getElementById('number').value);

    const result = () => {
        if (isNaN(number) || number < 0) return 'Masukkan angka positif!';
        let faktorial = 1;
        for (let i = 1; i <= number; i++) {
            faktorial *= i;
        }
        return faktorial;
    }

    hasil.innerHTML = result();
});