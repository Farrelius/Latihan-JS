const umur = document.getElementById('umur')
const count = document.getElementById('hitung')
labelKelompokUsia = document.getElementById('kelompokUsia')
count.addEventListener('click', function(){
    const KU = () => {
        const year = parseInt(umur.value)
        if (year<0) {
            return "Masih Fetus"
        }
        else if (year>55){
            return "Lansia"
        }
        else if (year>25 && year < 56){
            return "Dewasa"
        }
        else if (year>16 && year<26){
            return "Anak Remaja"
        }
        else if (year>11 && year<17){
            return "Anak Awal Remaja"
        }
        else if (year>=5 && year<10){
            return "Anak Kecil"
        }
        else if (year>0 && year<5){
            return "Bayi"
        }
        else {
            return "Input Invalid ;("
        }
    }
    labelKelompokUsia.innerHTML = KU()
})