
        const boton = document.getElementById("calcular");

        boton.addEventListener("click", calcularIMC);
        function calcularIMC() {
            const peso = parseFloat(document.getElementById("peso").value);
            const altura = parseFloat(document.getElementById("altura").value);

            if (peso > 0 && altura > 0) {
                altura = altura / 100; 
                const imc = peso / (altura * altura);
                alert("Tu IMC es: " + imc.toFixed(2));
            } else {
                alert("Por favor, ingresa valores válidos para peso y altura.");
            }
        }