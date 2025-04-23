const panjang = document.getElementById('panjang')
const lebar = document.getElementById('lebar')
labelluas = document.getElementById('luas')
labelkeliling = document.getElementById('keliling')
const hitung = document.getElementById('hitung')

hitung.addEventListener('click', function(){
    const P = (panjang.value)
    const L = (lebar.value)
    function luas(x,y){
        return x*y
    }

    function keliling(x,y){
        return 2*(x+y)
    }
    labelluas.innerHTML = luas(P,L) + "cm<sup>2</sup>" 
    labelkeliling.innerHTML = keliling(P,L) + "cm" 
})