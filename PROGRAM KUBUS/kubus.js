const sisi = document.getElementById('sisi')
labelluas = document.getElementById('luas')
labelvolume = document.getElementById('volume')
const hitung = document.getElementById('hitung')

hitung.addEventListener('click', function(){
    const S = (sisi.value)
    L = 6*S**2
    V = S**3
    labelluas.innerHTML = L + "cm<sup>2</sup>" 
    labelvolume.innerHTML = V + "cm<sup>3</sup>" 
})