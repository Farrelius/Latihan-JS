const check = document.getElementById('check')
const labelAngka = document.getElementById('Angka')

check.addEventListener('click', function(){
    const bulan = (document.getElementById('bulan').value)
    const converter = () => {
        if (bulan == "Januari") return 1
        else if (bulan == "Februari") return 2
        else if (bulan == "Maret") return 3
        else if (bulan == "April") return 4
        else if (bulan == "Mei") return 5
        else if (bulan == "Juni") return 6
        else if (bulan == "Juli") return 7
        else if (bulan == "Agustus") return 8
        else if (bulan == "September") return 9
        else if (bulan == "Oktober") return 10
        else if (bulan == "November") return 11
        else if (bulan == "Desember") return 12
        else return "Invalid"
    }
    labelAngka.innerHTML = converter()
})