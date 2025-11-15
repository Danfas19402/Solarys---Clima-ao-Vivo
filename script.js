// === 1º Algoritmo - Buscar o Clima ===
async function getWeather() {
  const city = document.getElementById("city").value.trim();
const searchBtn = document.getElementById("searchBtn");
  const apiKey = "00f1a02fefe2ba9904c8116651c7b5c9"; // Coloque aqui sua chave da API do OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Cidade não encontrada");
    }

    const data = await response.json();

    // Exibir informações do clima
    document.getElementById("city-name").textContent = `📍 ${data.name}, ${data.sys.country}`;
    document.getElementById("temperature").textContent = `🌡️ Temperatura: ${data.main.temp.toFixed(1)}°C`;
    document.getElementById("description").textContent = `🌀 ${data.weather[0].description}`;
    document.getElementById("humidity").textContent = `💧 Umidade: ${data.main.humidity}%`;
    document.getElementById("wind-speed").textContent = `💨 Vento: ${data.wind.speed} km/h`;

  } catch (error) {
    // Caso a cidade não seja encontrada
    document.getElementById("city-name").textContent = "Cidade não encontrada 😕";
    document.getElementById("temperature").textContent = "";
    document.getElementById("description").textContent = "";
    document.getElementById("humidity").textContent = "";
    document.getElementById("wind-speed").textContent = "";
  }
}

// === 2º Algoritmo - Limpar os Dados ===
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("city").value = "";
  document.getElementById("city-name").textContent = "";
  document.getElementById("temperature").textContent = "";
  document.getElementById("description").textContent = "";
  document.getElementById("humidity").textContent = "";
  document.getElementById("wind-speed").textContent = "";

  // Desativar o botão "Limpar" novamente
  document.getElementById("clearBtn").disabled = true;
});

// === 3º Algoritmo - Ativar/Desativar o botão "Limpar" ===
const cityInput = document.getElementById("city");
const clearBtn = document.getElementById("clearBtn");

cityInput.addEventListener("input", () => {
  clearBtn.disabled = cityInput.value.trim() === "";
});


