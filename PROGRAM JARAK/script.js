const hitung = document.getElementById('hitung')
labelJarak = document.getElementById('jarak')

hitung.addEventListener('click', function(){
    const v = parseFloat(document.getElementById('kecepatan').value)
    const t = parseFloat(document.getElementById('waktu').value)
    labelJarak.innerHTML = v*t
})