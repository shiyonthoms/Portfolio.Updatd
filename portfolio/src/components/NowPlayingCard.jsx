// src/components/NowPlayingCard.jsx
const NowPlayingCard = () => {
  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-5 shadow-lg flex flex-col items-center gap-3">
      <h2 className="text-lg font-medium text-white mb-2">🎵 Now Playing</h2>
      <iframe
        src="https://open.spotify.com/embed/playlist/1Ijbo9oJMbQ447NGHkxcA3?utm_source=generator&theme=0"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="rounded-lg"
      ></iframe>
      <p className="text-xs text-white/70 mt-1">Currently enjoying some coding tunes 🎧</p>
    </div>
  );
};

export default NowPlayingCard;
