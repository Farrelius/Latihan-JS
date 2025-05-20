const count = document.getElementById('hitung')
const result = document.getElementById('result')
count.addEventListener('click', function(){
    const c = document.getElementById('degrees').value
    const convert = () => {
        return (9/5 * c) + 32
    }
    result.innerHTML = convert() + " <sup>o</sup>F"
})