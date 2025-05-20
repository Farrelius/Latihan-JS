const beratBadan = document.getElementById('beratBadan')
const tinggiBadan = document.getElementById('tinggiBadan')
const count = document.getElementById('hitung')
labelBMI = document.getElementById('bmi')

count.addEventListener('click', function(){
    const bb = parseFloat(beratBadan.value)
    const tb = parseFloat(tinggiBadan.value)

    const totalBMI = () => {
        const result = bb/tb**2

        if (result<18.5) {
            return "Sangat Kurus"
        }
        
        else if (result>35){
            return "Sangat Obesitas"
        }
        else if (result>25){
            return "Obesitas"
        }


        else if (result>18.5){
            return "Normal"
        }
    }

    labelBMI.innerHTML = totalBMI()
})