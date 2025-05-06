const hour = document.getElementById('hour')
const count = document.getElementById('hitung')
labelMinute = document.getElementById('minute')

count.addEventListener('click', function(){
    const h = parseFloat(hour.value)

    const result = () => {
        return h*60
    }

    labelMinute.innerText = result() + " Minute"
})