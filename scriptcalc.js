function selectFX()  {
    if (document.getElementById("fx04").checked) {
        let rd = document.getElementById("terFX");
        rd.classList.remove("faixas");
        rd.classList.add("terFX");
    } else {
        let rd = document.getElementById("terFX");
        rd.classList.remove("terFX");
        rd.classList.add("faixas")
    }
}

function catchData() {
    if (document.getElementById("fx05").checked) {
        let fx01 = document.getElementById("fx01").value;
        let fx02 = document.getElementById("fx02").value;
        let fx03 = document.getElementById("fx03").value;
        let mult = document.getElementById("mult").value;
        let tlr = document.getElementById("tlr").value;  
        let sum = fx01 + fx02 + fx03;
        sum = parseFloat(sum);
        mult = parseFloat(mult);        
        let result = sum * mult;
        if (result >= 1000000000) {
            result /= 1000000000;
            result = String(result);
        let final = result + " gΩ  " +tlr;
        document.getElementById("resul").innerHTML = final;
        } else if (result >= 1000000) {
            result /= 1000000;
            result = String(result);
        let final = result + " mΩ  " +tlr;
        document.getElementById("resul").innerHTML = final;
        } else if (result >= 1000) {
            result /= 1000;
            result = String(result);
        let final = result + " kΩ  " +tlr;
        document.getElementById("resul").innerHTML = final;
        } else {
            result = String(result);
        let final = result + " Ω  " +tlr;
        document.getElementById("resul").innerHTML = final;
        }
    } else {
        let fx01 = document.getElementById("fx01").value;
        let fx02 = document.getElementById("fx02").value;
        let mult = document.getElementById("mult").value;
        let tlr = document.getElementById("tlr").value;  
        let sum = fx01 + fx02;
        sum = parseFloat(sum);
        mult = parseFloat(mult);        
        let result = sum * mult;
        if (result >= 1000000000) {
            result /= 1000000000;
            result = String(result);
        let final = result + " gΩ  " +tlr;
        document.getElementById("resul").innerHTML = final;
        } else if (result >= 1000000) {
            result /= 1000000;
            result = String(result);
        let final = result + " mΩ  " +tlr;
        document.getElementById("resul").innerHTML = final;
        } else if (result >= 1000) {
            result /= 1000;
            result = String(result);
        let final = result + " kΩ  " +tlr;
        document.getElementById("resul").innerHTML = final;
        } else {
            result = String(result);
        let final = result + " Ω  " +tlr;
        document.getElementById("resul").innerHTML = final;
        }
    }
    
}