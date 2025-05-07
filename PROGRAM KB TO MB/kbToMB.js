const kilobyte = document.getElementById('kilobyte')
const hitung = document.getElementById('hitung')
labelMB = document.getElementById('megabyte')

hitung.addEventListener('click', function(){
    const kb = (kilobyte.value)
    const result = () => {
        return kb/1024
    }

    labelMB.innerHTML = result() + " MB"
})