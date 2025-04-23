const Alas = document.getElementById('Alas')
const tinggi = document.getElementById('tinggi')
const tinggiSisi = document.getElementById('tinggiSisi')
const hitung = document.getElementById('hitung')
labelLuas = document.getElementById('luas')
labelKeliling = document.getElementById('keliling')

hitung.addEventListener('click', function(){
    const A = (Alas.value)
    const T = (tinggi.value)
    const S = (tinggiSisi.value)

    function luas(x,y){
        return (1/2)*x*y
    }

    function keliling(x){
        return 3*x
    }

    labelLuas.innerHTML = luas(A,T) + "m<sup>2</sup>"
    labelKeliling.innerHTML = keliling(S) + "m"
})