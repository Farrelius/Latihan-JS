const gigabyte = document.getElementById('gigabyte')
const hitung = document.getElementById('hitung')
labelMB = document.getElementById('megabyte')

hitung.addEventListener('click', function(){
    const gb = (gigabyte.value)
    const result = () => {
        return gb*1024
    }

    labelMB.innerHTML = result() + " MB"
})