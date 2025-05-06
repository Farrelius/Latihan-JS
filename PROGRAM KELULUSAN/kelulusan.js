const nilaiMtk = document.getElementById('nilaiMtk');
const nilaiBIng = document.getElementById('nilaiBIng');
const nilaiBInd = document.getElementById('nilaiBInd');
const nilaiPkn = document.getElementById('nilaiPkn');
const nilaiIPS = document.getElementById('nilaiIPS');
const nilaiFisika = document.getElementById('nilaiFska'); 
const nilaiBiologi = document.getElementById('nilaiBiologi');
const labelStatus = document.getElementById('status'); 
const check = document.getElementById('check');

check.addEventListener('click', function() {
    const mtk = parseFloat(nilaiMtk.value);
    const ing = parseFloat(nilaiBIng.value);
    const ind = parseFloat(nilaiBInd.value);
    const pkn = parseFloat(nilaiPkn.value);
    const ips = parseFloat(nilaiIPS.value);
    const fisika = parseFloat(nilaiFisika.value);
    const biologi = parseFloat(nilaiBiologi.value);

    const avgNilai = (a, b, c, d, e, f, g) => {
        return (a + b + c + d + e + f + g) / 7;
    }

    const rataRata = avgNilai(mtk, ing, ind, pkn, ips, fisika, biologi);

    function kelulusan(nilai) {
        return nilai > 75 ? "Lulus" : "Tidak Lulus";
    }

    const status = kelulusan(rataRata);
    labelStatus.textContent = status;
});
