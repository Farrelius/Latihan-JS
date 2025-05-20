const count = document.getElementById('hitung')
const result = document.getElementById('result')
count.addEventListener('click', function(){
    const degree = document.getElementById('degrees').value
    const convert = () => {
        return (degree-32) * 5/9 + 273.15
    }
    result.innerHTML = convert() + "<sup>o</sup>K"
})