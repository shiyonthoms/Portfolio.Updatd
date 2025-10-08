const AppleMusicCard = () => {
  return (
    <div className="backdrop-blur-md rounded-2xl p-4 bg-gray-800/30 hover:scale-105 transition duration-500 w-full max-w-xl">
      <h2 className="text-white font-bold text-sm mb-4">🎵 Now Playing</h2>
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        frameBorder="0"
        height="100"
        style={{ width: "100%", maxWidth: "660px", overflow: "hidden", borderRadius: "10px" }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/in/playlist/flow/pl.u-NpXm9RgT4rvKxWR"
      ></iframe>
    </div>
  );
};

export default AppleMusicCard;
