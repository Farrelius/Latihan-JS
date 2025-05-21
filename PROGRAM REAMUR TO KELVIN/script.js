const count = document.getElementById('hitung')
const result = document.getElementById('result')
count.addEventListener('click', function(){
    const degree = document.getElementById('degrees').value
    const convert = () => {
        return 5/4 * degree + 273
    }
    result.innerHTML = convert().toFixed(2) + "<sup>o</sup>K"
})