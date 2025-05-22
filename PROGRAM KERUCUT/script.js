const hitung = document.getElementById('hitung')
labelLK = document.getElementById('luas')
labelVolume = document.getElementById('volume')

hitung.addEventListener('click', function(){
    const r = parseFloat(document.getElementById('jari-jari').value)
    const t = parseFloat(document.getElementById('tinggi').value)
    const s = parseFloat(document.getElementById('sisi').value)

    function volume(){
        return(1/3)*3.14*r**2*t
    }

    function luasK(){
        return 3.14*r*r + r*s
    }

    labelLK.innerHTML = luasK().toFixed(2) + "m<sup>2</sup>"
    labelVolume.innerHTML = volume().toFixed(2) + "m<sup>3</sup>"
})