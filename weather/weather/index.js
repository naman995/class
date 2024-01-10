let fetchWeather = () => {
  const search = document.getElementById("city").value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5a6fecde88e686077a680fe3ebfbd843`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("temp").innerHTML =
        (data.main.temp - 273.15).toFixed(2) + `&deg; Celcius`;
      const weather = data.weather[0].main;
      const weatherIcons = {
        Mist: "☀️",
        Clouds: "☁️",
        Rain: "🌧️",
        Snow: "❄️",
        Fog: "🌁",
      };
      const emoji = weatherIcons[weather] || "❓";
      document.getElementById("icons").innerHTML = `${emoji} ${weather}`;
    });
};
