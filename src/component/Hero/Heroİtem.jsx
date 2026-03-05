import React, { useEffect, useState } from "react";

const Heroİtem = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Hata:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey]);
  if (loading) return <div className="text-white">Yükleniyor...</div>;
  if (!weatherData) return <div className="text-white">Veri bulunamadı.</div>;

  return (
    <div className="bg-[#001F3F]/20 rounded-xl p-6 w-full   backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center text-white">
        <h1>
          {weatherData.location.name}, {weatherData.location.country}
        </h1>
        <h2>{weatherData.current.temp_c}*C</h2>
        <img className="w-40" src={weatherData.current.condition.icon} alt="" />
        <p>Nem: %{weatherData.current.humidity}</p>
        <p>Rüzgar: {weatherData.current.wind_kph} km/h</p>
      </div>
    </div>
  );
};

export default Heroİtem;
