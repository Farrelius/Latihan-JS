labelHasil = document.getElementById('hasil')
const hitung = document.getElementById('hitung')

hitung.addEventListener('click', function(){
    const jarak = parseFloat(document.getElementById('berat').value)
    const result = () => {
        return jarak*10
    }
    labelHasil.innerHTML = result() + " hg" 
})