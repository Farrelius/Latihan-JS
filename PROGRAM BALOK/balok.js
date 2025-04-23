const panjang = document.getElementById('panjang')
const tinggi = document.getElementById('tinggi')
const lebar = document.getElementById('lebar')
const hitung = document.getElementById('hitung')
labelLuasPermukaan = document.getElementById('luas')
labelVolume = document.getElementById('volume')
labelKeliling= document.getElementById('keliling')

hitung.addEventListener('click', function(){
    P = (panjang.value)
    L = (lebar.value)
    T = (tinggi.value)
    
    function keliling(){
        return 4*(P+L+T)
    }

    function luasP(){
        return 2*(P*L+P*T+L*T)
    }

    function volume(){
        return P*L*T
    }
    
    labelLuasPermukaan.innerHTML = luasP() + "m<sup>2</sup>"
    labelKeliling.innerHTML = keliling() + "cm<sup>2</sup>"
    labelVolume.innerHTML = volume() + "cm<sup>3</sup>"

})
