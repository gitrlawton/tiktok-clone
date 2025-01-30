"use client";

import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  MoreHorizontal,
  Volume2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export function VideoPlayer({}) {
  const [isVolumeHovered, setIsVolumeHovered] = useState(false);

  return (
    <div className="relative h-screen py-4 max-w-md mx-auto group">
      <div className="flex h-full">
        <div className="h-full w-[calc(100%-60px)] bg-gray-300 relative rounded-lg overflow-hidden">
          {/* Top controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              className="flex items-center space-x-2 bg-black/50 rounded-full p-2"
              onMouseEnter={() => setIsVolumeHovered(true)}
              onMouseLeave={() => setIsVolumeHovered(false)}
            >
              <Volume2 className="h-4 w-4 text-white" />
              {isVolumeHovered && (
                <Slider
                  defaultValue={[100]}
                  max={100}
                  step={1}
                  className="w-24 h-4"
                />
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-black/50"
            >
              <MoreHorizontal className="h-4 w-4 text-white" />
            </Button>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-4 left-2">
            <div className="flex items-center space-x-2">
              <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                United States
              </span>
              <span className="bg-black/50 text-white px-2 py-1 rounded text-sm">
                account_name · 2024-12-3
              </span>
            </div>
            <div className="text-white mt-2 text-sm">
              Video description ...
              <button className="text-white/80 ml-2">more</button>
            </div>
            <div className="text-white/80 mt-1 text-xs">
              🎵 original sound – NAME OF SOUND
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div className="h-full w-1/3 bg-white"></div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="flex flex-col justify-end space-y-4 pl-2 w-[60px]">
          <div className="flex flex-col items-center">
            <div className="relative mb-2">
              <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs">Profile</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                +
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-gray-100"
            >
              <Heart className="h-6 w-6" />
            </Button>
            <span className="text-xs mt-1">311.5K</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-gray-100"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
            <span className="text-xs mt-1">1352</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-gray-100"
            >
              <Bookmark className="h-6 w-6" />
            </Button>
            <span className="text-xs mt-1">25.8K</span>
          </div>

          <div className="flex flex-col items-center mb-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-gray-100"
            >
              <Share2 className="h-6 w-6" />
            </Button>
            <span className="text-xs mt-1">6924</span>
          </div>
        </div>
      </div>
    </div>
  );
}
