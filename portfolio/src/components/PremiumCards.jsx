// PremiumCards.jsx
const learningTopics = ["Next.js", "TypeScript", "AI APIs", "GraphQL", "Tailwind CSS"];
const personalQuote = "“Code is like humor. When you have to explain it, it’s bad.” – Cory House";

const PremiumCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <div className="relative p-6 rounded-3xl bg-gradient-to-r from-gray-900/70 to-gray-800/50 backdrop-blur-xl shadow-xl hover:scale-105 transition transform duration-500">
        <h3 className="text-white text-lg font-bold mb-4">🚀 Currently Learning</h3>
        <div className="flex flex-wrap gap-3">
          {learningTopics.map((topic, idx) => (
            <span
              key={idx}
              className="bg-gray-700/50 text-white px-4 py-2 rounded-full font-medium hover:bg-green-500/40 transition duration-300 shadow-md"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Quote / Philosophy Card */}
      <div className="relative p-6 rounded-3xl bg-gradient-to-r from-gray-900/70 to-gray-800/50 backdrop-blur-xl shadow-xl hover:scale-105 transition transform duration-500 flex items-center justify-center">
        <p className="text-gray-200 italic text-center text-sm sm:text-base">{personalQuote}</p>
      </div>
    </div>
  );
};

export default PremiumCards;
