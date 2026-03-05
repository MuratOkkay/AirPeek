// src/components/WeatherCard/WeatherCard.jsx
const WeatherCard = ({ weather }) => {
  const {
    location: { name, country, localtime },
    current: { temp_c, feelslike_c, humidity, wind_kph, condition, uv, is_day },
  } = weather;

  const isDay = is_day === 1;

  return (
    <div
      className={`w-[90%] max-w-[400px] sm:max-w-[500px] p-6 rounded-3xl shadow-xl 
        backdrop-blur-md bg-white/10 border border-white/20 
        text-white transition-all duration-300
        ${
          isDay
            ? "bg-gradient-to-br from-blue-500/30 to-indigo-500/30"
            : "bg-gradient-to-br from-gray-800/30 to-black/30"
        }`}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-wide">
          {name}, {country}
        </h2>
        <p className="text-sm text-gray-300">{localtime}</p>

        <img
          src={`https:${condition.icon}`}
          alt={condition.text}
          className="w-24 h-24"
        />

        <p className="text-5xl font-semibold">{Math.round(temp_c)}°C</p>
        <p className="text-sm text-gray-200 capitalize">{condition.text}</p>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-200 w-full">
          <div className="flex flex-col items-center">
            <span className="font-medium">Hissedilen</span>
            <span>{Math.round(feelslike_c)}°C</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">Nem</span>
            <span>%{humidity}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">Rüzgar</span>
            <span>{wind_kph} km/h</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">UV</span>
            <span>{uv}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
