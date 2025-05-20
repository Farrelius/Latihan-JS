const array_of_data = JSON.parse(localStorage.getItem('data')) || [];
const add = document.getElementById('add')

add.addEventListener("submit", function(event){
    const name = document.getElementById('name').value
    const kelas = document.getElementById('class').value
    const askot = document.getElementById('askot').value
    const nilai = document.getElementById('nilai').value
    const grading = () => {
        if (nilai>=90 && nilai<=100) return "A"
        else if (nilai >=80 ) return "B"
        else if (nilai >=70) return "C"
        else if (nilai >=60) return "D"
        else if (nilai >=50) return "E"
        else if (nilai >=0) return "F"
        else return "Invalid"
    }
    grade = grading()
    event.preventDefault();
    const data = {
        nama: name,
        kelas: parseInt(kelas),
        askot,
        nilai,
        grade
    };
    array_of_data.push(data);
    localStorage.setItem('data',JSON.stringify(array_of_data));
    add.reset();
})