function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result = '';
  
    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        result = (inputValue * 9/5) + 32;
      } else if (toUnit === 'kelvin') {
        result = inputValue + 273.15;
      }
    } else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        result = (inputValue - 32) * 5/9;
      } else if (toUnit === 'kelvin') {
        result = (inputValue - 32) * 5/9 + 273.15;
      }
    } else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        result = inputValue - 273.15;
      } else if (toUnit === 'fahrenheit') {
        result = (inputValue - 273.15) * 9/5 + 32;
      }
    }
  
    document.getElementById('result').innerText = `${inputValue} ${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} = ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
    
    // Show the result container with  fade-in effect
    const resultContainer = document.querySelector('.result-container');
    resultContainer.classList.remove('hide');
  }
  
