const minute = document.getElementById('minute')
const count = document.getElementById('hitung')
labelHour = document.getElementById('hour')

count.addEventListener('click', function(){
    const mins = parseFloat(minute.value)

    const result = () => {
        return mins/60
    }

    labelHour.innerText = result() + " Hour"
})