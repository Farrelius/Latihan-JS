labelHasil = document.getElementById('hasil')
const hitung = document.getElementById('hitung')

hitung.addEventListener('click', function(){
    const jarak = parseFloat(document.getElementById('berat').value)
    const result = () => {
        return jarak*100
    }
    labelHasil.innerHTML = result() + " dag" 
})