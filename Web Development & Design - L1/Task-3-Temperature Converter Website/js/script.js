// Get HTML elements
const temperatureInput = document.getElementById("temperature");
const inputUnit = document.getElementById("input-unit");
const convertButton = document.getElementById("convert-btn");
const errorMessage = document.getElementById("input-error");

const celsiusResult = document.getElementById("celsius-result");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const kelvinResult = document.getElementById("kelvin-result");


// Convert temperature
function convertTemperature() {

    const inputValue = temperatureInput.value.trim();
    const unit = inputUnit.value;

    // Clear previous error
    errorMessage.textContent = "";

    // Reset results
    resetResults();


    // Validate empty input
    if (inputValue === "") {
        errorMessage.textContent = "Please enter a temperature.";
        return;
    }


    const temperature = Number(inputValue);


    // Validate numeric input
    if (!Number.isFinite(temperature)) {
        errorMessage.textContent = "Please enter a valid numeric temperature.";
        return;
    }


    // Check absolute zero
    if (unit === "celsius" && temperature < -273.15) {
        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-273.15 °C).";
        return;
    }

    if (unit === "fahrenheit" && temperature < -459.67) {
        errorMessage.textContent =
            "Temperature cannot be below absolute zero (-459.67 °F).";
        return;
    }

    if (unit === "kelvin" && temperature < 0) {
        errorMessage.textContent =
            "Temperature cannot be below absolute zero (0 K).";
        return;
    }


    // Variables for converted values
    let celsius;
    let fahrenheit;
    let kelvin;


    // Perform conversion
    switch (unit) {

        case "celsius":
            celsius = temperature;
            fahrenheit = (temperature * 9 / 5) + 32;
            kelvin = temperature + 273.15;
            break;

        case "fahrenheit":
            celsius = (temperature - 32) * 5 / 9;
            fahrenheit = temperature;
            kelvin = celsius + 273.15;
            break;

        case "kelvin":
            celsius = temperature - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;
            kelvin = temperature;
            break;
    }


    // Display results
    celsiusResult.textContent = `${formatTemperature(celsius)} °C`;
    fahrenheitResult.textContent = `${formatTemperature(fahrenheit)} °F`;
    kelvinResult.textContent = `${formatTemperature(kelvin)} K`;
}


// Format converted temperature
function formatTemperature(value) {

    return Number(value.toFixed(2));
}


// Reset results
function resetResults() {

    celsiusResult.textContent = "-- °C";
    fahrenheitResult.textContent = "-- °F";
    kelvinResult.textContent = "-- K";
}


// Convert button event
convertButton.addEventListener("click", convertTemperature);


// Real-time validation
temperatureInput.addEventListener("input", () => {

    errorMessage.textContent = "";

    if (temperatureInput.value.trim() !== "") {
        const temperature = Number(temperatureInput.value);
        const unit = inputUnit.value;

        if (!Number.isFinite(temperature)) {
            errorMessage.textContent =
                "Please enter a valid numeric temperature.";
            return;
        }

        if (unit === "celsius" && temperature < -273.15) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (-273.15 °C).";
        }

        if (unit === "fahrenheit" && temperature < -459.67) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (-459.67 °F).";
        }

        if (unit === "kelvin" && temperature < 0) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (0 K).";
        }
    }
});


// Re-check validation when unit changes
inputUnit.addEventListener("change", () => {

    if (temperatureInput.value.trim() !== "") {
        const temperature = Number(temperatureInput.value);
        const unit = inputUnit.value;

        errorMessage.textContent = "";

        if (!Number.isFinite(temperature)) {
            errorMessage.textContent =
                "Please enter a valid numeric temperature.";
            return;
        }

        if (unit === "celsius" && temperature < -273.15) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (-273.15 °C).";
        }

        if (unit === "fahrenheit" && temperature < -459.67) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (-459.67 °F).";
        }

        if (unit === "kelvin" && temperature < 0) {
            errorMessage.textContent =
                "Temperature cannot be below absolute zero (0 K).";
        }
    }
});