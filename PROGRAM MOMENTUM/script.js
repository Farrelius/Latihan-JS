const hitung = document.getElementById('hitung')
labelMomentum = document.getElementById('momentum')

hitung.addEventListener('click', function(){
    const v = parseFloat(document.getElementById('kecepatan').value)
    const m = parseFloat(document.getElementById('m').value)
    labelMomentum.innerHTML = m*v
})