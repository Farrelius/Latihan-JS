const day = document.getElementById('day')
const count = document.getElementById('hitung')
labelWeek = document.getElementById('week')

count.addEventListener('click', function(){
    const d = parseFloat(day.value)

    const result = () => {
        return d/7
    }

    labelWeek.innerText = result() + " Week"
})