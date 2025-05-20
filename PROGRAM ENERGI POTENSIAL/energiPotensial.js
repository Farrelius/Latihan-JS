const mass = document.getElementById('mass')
const height = document.getElementById('height')
const gravity = document.getElementById('gravity')
const hitung = document.getElementById('hitung')
labelEP= document.getElementById('ep')

hitung.addEventListener('click', function(){
    const m = parseFloat(mass.value)
    const g = parseFloat(gravity.value)
    const h = parseFloat(height.value)

    const EP = () => {
        return m*g*h
    }

    labelEP.innerHTML = EP() + " Joule"
})