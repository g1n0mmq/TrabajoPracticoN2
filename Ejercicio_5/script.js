document.getElementById("calcular").addEventListener("click", calcularArea);

function calcularArea() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    if (a > 0 && b > 0 && c > 0 && c < a) {
        const areaRect = b * c;
        const areaTri = (b * (a - c)) / 2;
        const areaTotal = areaRect + areaTri;

        alert("El área total del terreno es: " + areaTotal.toFixed(2) + " m²");
    } else {
        alert("Por favor, ingresa valores válidos. Recuerda que C debe ser menor que A.");
    }
}