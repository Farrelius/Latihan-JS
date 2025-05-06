const minute = document.getElementById('minute')
const count = document.getElementById('hitung')
labelSecond = document.getElementById('second')

count.addEventListener('click', function(){
    const mins = parseFloat(minute.value)

    const result = () => {
        return mins*60
    }

    labelSecond.innerText = result() + " Second"
})