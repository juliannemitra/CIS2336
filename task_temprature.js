const temperatureDataJSON = `[
  { "year": 2021, "date": "October 8", "fahrenheit": 82 },
  { "year": 2022, "date": "October 8", "fahrenheit": 76 },
  { "year": 2023, "date": "October 8", "fahrenheit": 79 },
  { "year": 2024, "date": "October 8", "fahrenheit": 84 },
  { "year": 2025, "date": "October 8", "fahrenheit": 81 }
]`;

// add your code below:
const temperatureData = JSON.parse(temperatureDataJSON);

function fahrenheitToCelsius(fTemp) {
  return (fTemp - 32) * 5/9;
}

function calculateAverage(temperatures) {
  let sum = 0;
  for (const temp of temperatures) {
    sum += temp;
  }
  return sum / temperatures.length;
}

function calculateVariance(temperatures) {
  const average = calculateAverage(temperatures);
  let squaredDiffSum = 0;
  for (const temp of temperatures) {
    squaredDiffSum += (temp - average) ** 2;
  }
  return squaredDiffSum / temperatures.length;
}

const celsiusTemperatures = [];

for (const entry of temperatureData) {
  const celsius = fahrenheitToCelsius(entry.fahrenheit);
  celsiusTemperatures.push(celsius);
  console.log(`${entry.year}: ${entry.fahrenheit}°F = ${celsius.toFixed(2)}°C`);
}

const averageTemp = calculateAverage(celsiusTemperatures);
const temperatureVariance = calculateVariance(celsiusTemperatures);

console.log(`Average temperature: ${averageTemp.toFixed(2)}°C`);
console.log(`Temperature variance: ${temperatureVariance.toFixed(2)}`);