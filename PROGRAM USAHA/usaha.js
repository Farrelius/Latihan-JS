const gaya = document.getElementById('gaya')
const perpindahan = document.getElementById('perpindahan')
const hitung = document.getElementById('hitung')
labelUsaha= document.getElementById('work')

hitung.addEventListener('click', function(){
    const F = parseFloat(gaya.value)
    const s = parseFloat(perpindahan.value)

    const W = () => {
        return F*s
    }

    labelUsaha.innerHTML = W() + " Joule"
})