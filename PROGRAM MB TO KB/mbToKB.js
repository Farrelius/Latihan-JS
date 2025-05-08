const megabyte = document.getElementById('megabyte')
const hitung = document.getElementById('hitung')
labelKB = document.getElementById('kilobyte')

hitung.addEventListener('click', function(){
    const mb = (megabyte.value)
    const result = () => {
        return mb*1024
    }

    labelKB.innerHTML = result() + " KB"
})