document.addEventListener('DOMContentLoaded', () => {
    const temperature = 71; // Current temperature in New York City
    const wind = 20; // Example wind speed, you can update this with real-time data if available

    const calculateWindChill = function (T, V) {
        return 35.74 + 0.6215 * T - 35.75 * Math.pow(V, 0.16) + 0.4275 * T * Math.pow(V, 0.16);
    };

    document.getElementById('temp').innerHTML = temperature;
    document.getElementById('wind').innerHTML = wind;

    function handleClick() {
        const chill = calculateWindChill(temperature, wind);
        document.getElementById('chill').innerText = chill.toFixed(2);
    }

    document.getElementById('chillButton').addEventListener('click', handleClick);

    // Calculate wind chill on page load
    handleClick();
});



