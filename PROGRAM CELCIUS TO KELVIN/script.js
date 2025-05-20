const count = document.getElementById('hitung')
const result = document.getElementById('result')
count.addEventListener('click', function(){
    const c = parseFloat(document.getElementById('degrees').value)
    const convert = () => {
        return c+273.15
    }
    result.innerHTML = convert() + "<sup>o</sup>K"
})