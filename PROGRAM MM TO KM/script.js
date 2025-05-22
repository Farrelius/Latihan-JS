labelHasil = document.getElementById('hasil')
const hitung = document.getElementById('hitung')

hitung.addEventListener('click', function(){
    const jarak = parseFloat(document.getElementById('jarak').value)
    const result = () => {
        return jarak/1000000
    }
    labelHasil.innerHTML = result() + " km" 
})