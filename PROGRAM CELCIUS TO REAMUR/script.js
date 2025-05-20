const count = document.getElementById('hitung')
const result = document.getElementById('result')
count.addEventListener('click', function(){
    const c = parseFloat(document.getElementById('degrees').value)
    const convert = () => {
        return (4/5)*c
    }
    result.innerHTML = convert() + "<sup>o</sup>R"
})