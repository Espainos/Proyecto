// Referencias a los elementos de la interfaz DOM
const magnitudeSelect = document.getElementById('magnitude-select');
const unitFromSelect = document.getElementById('unit-from');
const unitToSelect = document.getElementById('unit-to');
const inputValue = document.getElementById('input-value');
const resultDisplay = document.getElementById('result-display');
const formulaDisplay = document.getElementById('formula-display');

// Llena los selectores de unidades según la magnitud elegida
function populateUnits() {
    const selectedMag = magnitudeSelect.value;
    const unitsObj = conversionData[selectedMag].units;
    
    unitFromSelect.innerHTML = '';
    unitToSelect.innerHTML = '';

    const keys = Object.keys(unitsObj);
    keys.forEach((unit) => {
        let optFrom = document.createElement('option');
        optFrom.value = unit;
        optFrom.textContent = unit;
        unitFromSelect.appendChild(optFrom);

        let optTo = document.createElement('option');
        optTo.value = unit;
        optTo.textContent = unit;
        unitToSelect.appendChild(optTo);
    });

    // Selecciona por defecto la segunda unidad en el destino
    if (keys.length > 1) {
        unitToSelect.selectedIndex = 1;
    }

    convert();
}

// Ejecuta el cálculo numérico
function convert() {
    const val = parseFloat(inputValue.value);
    if (isNaN(val)) {
        resultDisplay.textContent = "---";
        formulaDisplay.textContent = "Ingrese un número válido";
        return;
    }

    const magKey = magnitudeSelect.value;
    const magData = conversionData[magKey];
    const fromUnit = unitFromSelect.value;
    const toUnit = unitToSelect.value;

    if (!fromUnit || !toUnit) return;

    // Fórmula: (Valor * FactorOrigen) / FactorDestino
    const factorFrom = magData.units[fromUnit];
    const factorTo = magData.units[toUnit];

    const valueInBase = val * factorFrom;
    const finalResult = valueInBase / factorTo;

    // Formatear salida (usa notación científica si el valor es muy pequeño o grande)
    let formattedResult;
    if (Math.abs(finalResult) < 1e-4 || Math.abs(finalResult) >= 1e6) {
        formattedResult = finalResult.toExponential(4);
    } else {
        formattedResult = Number(finalResult.toFixed(6)).toString();
    }

    resultDisplay.textContent = `${formattedResult} ${toUnit}`;
    
    // Muestra la equivalencia unitaria
    const unitEquivalence = (factorFrom / factorTo);
    let formattedEquiv = (Math.abs(unitEquivalence) < 1e-4 || Math.abs(unitEquivalence) >= 1e6) 
        ? unitEquivalence.toExponential(4) 
        : Number(unitEquivalence.toFixed(6)).toString();

    formulaDisplay.textContent = `Equivalencia: 1 ${fromUnit} = ${formattedEquiv} ${toUnit}`;
}

// Controladores de eventos para interactividad
magnitudeSelect.addEventListener('change', populateUnits);
unitFromSelect.addEventListener('change', convert);
unitToSelect.addEventListener('change', convert);
inputValue.addEventListener('input', convert);

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', populateUnits);