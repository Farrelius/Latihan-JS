const phi = 3.14
const jari = document.getElementById('jari')
const hitung = document.getElementById('hitung')
labelLuas = document.getElementById('Luas')
labelVolume = document.getElementById('Volume')

hitung.addEventListener('click', function(){
    const r = (jari.value)
    function luas(x){
        return 4*phi**x**2
    }

    function volume(x){
        return (4/3)*phi*x**3
    }

    labelLuas.innerHTML = luas(r).toFixed(2) + " cm<sup>2</sup>"
    labelVolume.innerHTML = volume(r).toFixed(2) + " cm<sup>3</sup>"
})