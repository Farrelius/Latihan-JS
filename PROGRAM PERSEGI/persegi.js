const sisi = document.getElementById('sisi')
labelluas = document.getElementById('luas')
labelkeliling = document.getElementById('keliling')
const hitung = document.getElementById('hitung')

hitung.addEventListener('click', function(){
    const S = (sisi.value)
    L = S**2
    K = 4*S
    labelluas.innerHTML = L + "cm<sup>2</sup>" 
    labelkeliling.innerHTML = K + "cm" 
})