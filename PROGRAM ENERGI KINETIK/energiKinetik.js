const mass = document.getElementById('mass')
const velocity = document.getElementById('velocity')
const hitung = document.getElementById('hitung')
labelEK= document.getElementById('ek')

hitung.addEventListener('click', function(){
    const m = parseFloat(mass.value)
    const v = parseFloat(velocity.value)

    const EK = () => {
        return 1/2*m*v**2
    }

    labelEK.innerHTML = EK() + " Joule"
})