const terabyte = document.getElementById('terabyte')
const hitung = document.getElementById('hitung')
labelGB = document.getElementById('gigabyte')

hitung.addEventListener('click', function(){
    const tb = (terabyte.value)
    const result = () => {
        return tb*1024
    }

    labelGB.innerHTML = result() + " GB"
})