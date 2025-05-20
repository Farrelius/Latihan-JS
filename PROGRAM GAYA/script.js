const count = document.getElementById('hitung')
labelGaya = document.getElementById('F')

count.addEventListener('click', function(){
    const Mass = document.getElementById('mass').value
    const a = document.getElementById('acceleration').value
    const gaya = () => {
        return Mass*a
    }
    labelGaya.innerHTML = gaya() + " Newton"
})