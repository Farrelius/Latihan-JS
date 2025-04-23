const phi = 3.14
const jari = document.getElementById('jari')
const tinggi = document.getElementById('tinggi')
const garisPelukis = document.getElementById('garisPelukis')
const hitung = document.getElementById('hitung')
labelLuas = document.getElementById('Luas')
labelVolume = document.getElementById('Volume')

hitung.addEventListener('click', function(){
    const r = (jari.value)
    const t = (tinggi.value)
    const s = (garisPelukis.value)
    function luasP(x,y){
        return phi*x*(x+y)
    }

    function volume(x,y){
        return 1/3*phi*x**2*y
    }

    labelLuas.innerHTML = luasP(r,s) + " cm<sup>2</sup>"
    labelVolume.innerHTML = volume(r,t).toFixed(2) + " cm<sup>3</sup>"
})