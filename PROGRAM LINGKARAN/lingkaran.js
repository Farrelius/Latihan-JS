const phi = 3.14
const jari = document.getElementById('jari')
const hitung = document.getElementById('hitung')
labelLuas = document.getElementById('Luas')
labelKeliling = document.getElementById('Keliling')

hitung.addEventListener('click', function(){
    const r = (jari.value)
    function luas(x){
        return phi*x**2
    }

    function kelliling(x){
        return 2*phi*x
    }

    labelLuas.innerHTML = luas(r) + " cm<sup>2</sup>"
    labelKeliling.innerHTML = kelliling(r) + " cm"
})