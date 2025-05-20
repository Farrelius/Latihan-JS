const count = document.getElementById('hitung')
const result = document.getElementById('result')
count.addEventListener('click', function(){
    const degree = document.getElementById('degrees').value
    const convert = () => {
        return (4/9) * (degree-32)
    }
    result.innerHTML = convert() + "<sup>o</sup>R"
})