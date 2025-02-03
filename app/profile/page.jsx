"use client";

import { Settings, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

export default function ProfilePage() {
  const [videos, setVideos] = useState([]);

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

  return (
    <div className="max-w-[1300px] mx-auto p-8">
      <div className="flex gap-8 mb-8">
        {/* Profile Image */}
        <div className="w-[140px] h-[140px] rounded-full overflow-hidden flex-shrink-0 bg-cyan-500"></div>

        {/* Profile Info */}
        <div className="flex-1">
          <div className="mb-4">
            <h1 className="text-2xl font-bold mb-1">username</h1>
            <p className="text-lg mb-4">firstname</p>
            <div className="flex gap-3">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                Edit profile
              </Button>
              <Button variant="outline">Promote post</Button>
              <Button variant="outline" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex gap-6">
            <div>
              <span className="font-bold">0</span>{" "}
              <span className="text-gray-500">Following</span>
            </div>
            <div>
              <span className="font-bold">0</span>{" "}
              <span className="text-gray-500">Followers</span>
            </div>
            <div>
              <span className="font-bold">0</span>{" "}
              <span className="text-gray-500">Likes</span>
            </div>
          </div>

          <p className="mt-4 text-gray-600">No bio yet.</p>
        </div>
      </div>

      <div className="border-b mb-4">
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="w-full justify-start h-auto p-0 bg-transparent">
            <TabsTrigger
              value="videos"
              className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none px-4 py-2"
            >
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none px-4 py-2"
            >
              Favorites
            </TabsTrigger>
            <TabsTrigger
              value="liked"
              className="data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none px-4 py-2"
            >
              Liked
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex justify-end mb-4">
        <Tabs defaultValue="latest" className="w-auto">
          <TabsList>
            <TabsTrigger value="latest">Latest</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="oldest">Oldest</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-4 gap-4">
        {videos.map((video, index) => (
          <div
            key={video.url || index}
            className="relative group cursor-pointer"
          >
            <video
              src={video.url}
              className="w-[300px] h-[350px] object-cover rounded-lg"
              preload="metadata"
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <div className="flex items-end justify-between">
                <span className="font-bold text-md">0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
