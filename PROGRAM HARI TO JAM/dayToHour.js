const day = document.getElementById('day')
const count = document.getElementById('hitung')
labelHour = document.getElementById('hour')

count.addEventListener('click', function(){
    const d = parseFloat(day.value)

    const result = () => {
        return d*24
    }

    labelHour.innerText = result() + " Hour"
})