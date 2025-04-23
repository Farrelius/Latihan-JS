const phi = 3.14
const jari = document.getElementById('jari')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
labelLuas = document.getElementById('Luas')
labelKeliling = document.getElementById('Keliling')
labelVolume = document.getElementById('Volume')

hitung.addEventListener('click', function(){
    const r = (jari.value)
    const t = (tinggi.value)
    function luasP(x,y){
        return 2*phi*x*(x+y)
    }

    function keliling(x){
        return 2*phi*x
    }

    function volume(x,y){
        return phi*x**2*y
    }

    labelLuas.innerHTML = luasP(r,t) + " cm<sup>2</sup>"
    labelKeliling.innerHTML = keliling(r) + " cm"
    labelVolume.innerHTML = volume(r,t) + " cm<sup>3</sup>"
})