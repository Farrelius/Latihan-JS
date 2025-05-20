const angka = document.getElementById('angka')
const check = document.getElementById('cek')
const result = document.getElementById('result')
check.addEventListener('click', function(){
    const number = (angka.value)
    const ganjilOrGenap = () => {
        if (number % 2 == 1) return "Ganjil"
        else return "Genap"
    }
    result.innerHTML = ganjilOrGenap()
})