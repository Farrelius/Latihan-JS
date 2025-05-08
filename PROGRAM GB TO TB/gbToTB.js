const gigabyte = document.getElementById('gigabyte')
const hitung = document.getElementById('hitung')
labelTB = document.getElementById('terabyte')

hitung.addEventListener('click', function(){
    const gb = (gigabyte.value)
    const result = () => {
        return gb/1024
    }

    labelTB.innerHTML = result() + " TB"
})