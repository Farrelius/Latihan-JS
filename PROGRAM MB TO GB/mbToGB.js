const megabyte = document.getElementById('megabyte')
const hitung = document.getElementById('hitung')
labelGB = document.getElementById('gigabyte')

hitung.addEventListener('click', function(){
    const mb = (megabyte.value)
    const result = () => {
        return mb/1024
    }

    labelGB.innerHTML = result() + " GB"
})