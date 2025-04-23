const luasAlas = document.getElementById('LuasAlas')
const tinggi = document.getElementById('tinggi')
const jumlahSisiTegak = document.getElementById('JumlahSisiTegak')
const hitung = document.getElementById('hitung')
labelLuasPermukaan = document.getElementById('luas')
labelVolume = document.getElementById('volume')

hitung.addEventListener('click', function(){
    const LA = (luasAlas.value)
    const T = (tinggi.value)
    const sisiTegak = (jumlahSisiTegak.value)

    function volume(x,y){
        return(1/3)*x*y
    }

    function luasPermukaan(x,y){
        return x+y
    }

    labelLuasPermukaan.innerHTML = luasPermukaan(LA,sisiTegak) + "m<sup>2</sup>"
    labelVolume.innerHTML = volume(LA,T) + "m<sup>3</sup>"
})