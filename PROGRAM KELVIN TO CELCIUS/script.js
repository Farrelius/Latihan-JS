const count = document.getElementById('hitung')
const result = document.getElementById('result')
count.addEventListener('click', function(){
    const degree = document.getElementById('degrees').value
    const convert = () => {
        return degree-273.15
    }
    result.innerHTML = convert().toFixed(2) + "<sup>o</sup>K"
})