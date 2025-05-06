const second = document.getElementById('second')
const count = document.getElementById('hitung')
labelMinute = document.getElementById('minute')

count.addEventListener('click', function(){
    const secs = parseFloat(second.value)

    const result = () => {
        return secs/60
    }

    labelMinute.innerText = result() + " Minute"
})