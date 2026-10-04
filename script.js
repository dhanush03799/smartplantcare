function checkPlant() {

    let temperature = Number(document.getElementById("temperature").value);
    let moisture = Number(document.getElementById("moisture").value);
    let humidity = Number(document.getElementById("humidity").value);

    let result = document.getElementById("result");

    // Check whether all values are entered
    if (
        document.getElementById("temperature").value === "" ||
        document.getElementById("moisture").value === "" ||
        document.getElementById("humidity").value === ""
    ) {
        result.innerHTML = "⚠️ Please enter all values.";
        result.style.backgroundColor = "#fff3cd";
        result.style.color = "#856404";
        return;
    }

    // Plant health conditions
    if (moisture < 35) {

        result.innerHTML = "💧 Water Needed!<br>Soil moisture is low.";
        result.style.backgroundColor = "#cfe8ff";
        result.style.color = "#0056b3";

    } 
    else if (temperature > 35 || humidity < 30) {

        result.innerHTML = "⚠️ Plant Needs Attention!";
        result.style.backgroundColor = "#f8d7da";
        result.style.color = "#721c24";

    } 
    else {

        result.innerHTML = "🌱 Plant is Healthy!<br>No immediate action needed.";
        result.style.backgroundColor = "#d4edda";
        result.style.color = "#155724";
    }
}