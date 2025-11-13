// src/components/WeatherTimeCard.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudDrizzle,
  CloudFog,
  Loader2,
  MapPin,
} from "lucide-react";

const WeatherTimeCard = () => {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Update local time every second
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
      setTime(now.toLocaleTimeString("en-IN", options));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch weather
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=10.85&longitude=76.27&current_weather=true"
        );
        const data = await res.json();
        setWeather(data.current_weather);
      } catch (err) {
        console.error("Weather fetch failed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  // Map weather code to icon
  const getWeatherIcon = (code) => {
    if (code === 0) return <Sun className="text-yellow-400" size={30} />;
    if (code < 45) return <Cloud className="text-blue-300" size={30} />;
    if (code < 60) return <CloudDrizzle className="text-blue-400" size={30} />;
    if (code < 80) return <CloudRain className="text-blue-400" size={30} />;
    return <CloudFog className="text-gray-300" size={30} />;
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative overflow-hidden rounded-xl backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5
  border border-white/10 shadow-xl p-2 sm:p-3 flex flex-col items-center text-white w-full scale-[0.92]"
>
  <motion.div
    className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400/30 to-teal-400/20 
    rounded-full blur-3xl"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
  />

  <h2 className="text-sm font-medium tracking-wide mb-1 flex items-center gap-1">
    <MapPin size={14} className="text-teal-300" />
    Kerala, India
  </h2>

  {loading ? (
    <div className="flex flex-col items-center justify-center py-4">
      <Loader2 className="animate-spin text-teal-300" size={22} />
      <p className="text-xs opacity-70 mt-2">Fetching live data...</p>
    </div>
  ) : (
    <>
      <motion.div
        className="flex flex-col items-center justify-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          {getWeatherIcon(weather?.weathercode, 24)}
          <span className="text-3xl font-semibold drop-shadow-sm">
            {Math.round(weather?.temperature)}°C
          </span>
        </div>
      </motion.div>
    </>
  )}
</motion.div>
  );
};

export default WeatherTimeCard;
