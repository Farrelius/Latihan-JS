const week = document.getElementById('week')
const count = document.getElementById('hitung')
labelDay = document.getElementById('day')

count.addEventListener('click', function(){
    const w = parseFloat(week.value)

    const result = () => {
        return w*7
    }

    labelDay.innerText = result() + " Day"
})