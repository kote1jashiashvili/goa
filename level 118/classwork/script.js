function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'გთხოვთ, შეიყვანოთ ციფრი!';
    } else {
        if (unit === "C") {
            
            const fahrenheit = (temperature * 9/5) + 32;
            result = `${temperature} °C = ${fahrenheit.toFixed(2)} °F`;
        } else if (unit === "F") {
            const celsius = (temperature - 32) * 5/9;
            result = `${temperature} °F = ${celsius.toFixed(2)} °C`;
        }
    }

    document.getElementById("result").innerText = result;
}
