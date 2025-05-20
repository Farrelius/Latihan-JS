const url = 'array_of_data'

document.addEventListener('DOMContentLoaded', () => {
    var total = 0
    for (let i in array_of_data){
        total+=1;
    }

    if (total > 0){
        const content = document.getElementById('content');
        const data = JSON.parse(localStorage.getItem("data")) ||[];
        let dataHTML = "<ul>";
            data.forEach(element => {
                dataHTML+= `
                    <li>
                        <p>Nama : ${element.nama}</p>
                        <p>Kelas : ${element.kelas}</p>
                        <p>Asal Kota : ${element.askot}</p>
                        <p>Nilai : ${element.nilai}</p>
                        <p>Grade : ${element.grade}</p>
                    </li>`;
            });
            dataHTML+="</ul>";
            content.innerHTML=dataHTML;
    }
});