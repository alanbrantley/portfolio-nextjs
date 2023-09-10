import React from "react";

function YouTubeEmbed({ videoId }) {
  return (
    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="mt-4 absolute top-0 left-0 w-full h-full border-0 shadow-xl shadow-gray-400 rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default YouTubeEmbed;
