const searchValue = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
let cityName = document.getElementById("Cityname");
let MainWeather = document.getElementById("mainWeather");
let normalTemp = document.getElementById("NormalTemp");
let minTemp = document.getElementById("min-temp");
let maxTemp = document.getElementById("max-temp");
const api_key = "b658e89394039c288dfd47e1dae42de5";
const climateImage = document.getElementById("Climateimage");
const Imagediv = document.getElementById("imageDiv");

const getApi = async (city_name) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name},IND&appid=${api_key}&units=metric`
    );
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error);
    return data
  }
};

// "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b658e89394039c288dfd47e1dae42de5&units=metric"

searchBtn.addEventListener("click", async () => {
  const userInput = searchValue.value;
  const fullData = await getApi(userInput);
  console.log(fullData);
  console.log(userInput);
  //its for changes the innertext of the cityName id
  cityName.innerText = `${userInput}`;
  //its changes the weather by mainWeather id
  MainWeather.innerText = `${fullData.weather[0].main}`;
  //its changes the temperature by NoramlTemp id
  normalTemp.innerText = `Temp: ${fullData.main.temp}°`;
  //its changes the temperature by min-temp id
  minTemp.innerText = `Min Temp: ${fullData.main.temp_min}°`;
  //its changes the temperature by max-temp id
  maxTemp.innerText = `Max Temp: ${fullData.main.temp_max}°`;
  showImage(fullData) 
});

const showImage = (weatherData) => {
  let climate = weatherData.weather[0].main;
  console.log(climate);
  if (climate === "Clouds") {
    Imagediv.innerHTML = '<img id="Climateimage" src="Image/clouds.png" >';
  } else if (climate === "Clear") {
    Imagediv.innerHTML = '<img id="Climateimage" src="Image/clear.png" >';
  } else if (climate === "Dizzle") {
    Imagediv.innerHTML = '<img id="Climateimage" src="Image/dizzle.png" >';
  } else if (climate === "Humidity") {
    Imagediv.innerHTML = '<img id="Climateimage" src="Image/humidity.png" >';
  } else if (climate === "Mist") {
    Imagediv.innerHTML = '<img id="Climateimage" src="Image/mist.png" >';
  } else if (climate === "Rain") {
    Imagediv.innerHTML = '<img id="Climateimage" src="Image/rain.png" >';
  } else if (climate === "Snow") {
    Imagediv.innerHTML = '<img id="Climateimage" src="Image/snow.png" >';
  } else {
    Imagediv.innerHTML = '<img id="Climateimage" src="Image/wind.png" >';
  }
};
