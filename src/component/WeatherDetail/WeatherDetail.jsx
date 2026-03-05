import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
const WeatherDetail = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      const trimmedCity = city?.trim();
      if (!trimmedCity || !apiKey) {
        setError("Şehir adı veya API anahtarı eksik");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      const normalizedCity = encodeURIComponent(trimmedCity);

      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${normalizedCity}&aqi=no`
        );

        const data = await res.json();
        console.log("API cevabı:", data);

        if (!res.ok || data.error) {
          setError(data.error?.message || "Veri alınamadı.");
          setWeather(null);
        } else {
          setWeather(data);
        }
      } catch (error) {
        setError("Bağlantı hatası");
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, apiKey]);

  if (loading)
    return <p className="text-white text-center mt-10">Yükleniyor...</p>;

  if (error)
    return (
      <div className="text-red-400 text-center mt-10">
        <p>Hata: {error}</p>
        <p>Lütfen şehir adını kontrol edin veya daha sonra tekrar deneyin.</p>
      </div>
    );

  if (!weather)
    return <p className="text-white text-center mt-10">Veri bulunamadı</p>;

  return (
    <div className="flex items-center justify-center py-10 sm:py-40 lg:py-15 bg-gradient-to-br from-[#001F3F] to-[#3A6D8C]">
      <WeatherCard weather={weather} />
    </div>
  );
};

export default WeatherDetail;
