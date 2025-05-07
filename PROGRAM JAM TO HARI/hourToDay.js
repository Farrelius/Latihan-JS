const hour = document.getElementById('hour')
const count = document.getElementById('hitung')
labelDay = document.getElementById('day')

count.addEventListener('click', function(){
    const h = parseFloat(hour.value)

    const result = () => {
        return h/24
    }

    labelDay.innerText = result() + " Day"
})