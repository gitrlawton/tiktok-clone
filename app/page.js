"use client";

import { useState, useEffect } from "react";
import { VideoPlayer } from "@/components/custom/video-player";
import { Carets } from "@/components/custom/carets";

export default function HomePage() {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/list-videos");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setVideos(data.videos);
      } catch (err) {
        console.log("Error fetching videos:", err);
      }
    };

    fetchVideos();
  }, []);

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex < videos.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : videos.length - 1
    );
  };

  // If no videos, show a placeholder
  if (videos.length === 0) {
    return <> </>;
  }

  return (
    <>
      <VideoPlayer
        video={videos[currentVideoIndex]}
        onNext={handleNextVideo}
        onPrev={handlePrevVideo}
      />
      <Carets onUp={handlePrevVideo} onDown={handleNextVideo} />
    </>
  );
}
