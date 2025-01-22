import { Heart, MessageCircle, Bookmark, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoPlayer() {
  return (
    <div className="relative h-screen py-4 max-w-sm mx-auto">
      <div className="h-full bg-gray-300 relative rounded-lg overflow-hidden">
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
      </div>

      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-2">
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-gray-100"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <span className="text-xs mt-1">311.5K</span>
        </div>
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-gray-100"
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
          <span className="text-xs mt-1">1352</span>
        </div>
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-gray-100"
          >
            <Bookmark className="h-5 w-5" />
          </Button>
          <span className="text-xs mt-1">25.8K</span>
        </div>
        <div className="flex flex-col items-center">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-gray-100"
          >
            <Share2 className="h-5 w-5" />
          </Button>
          <span className="text-xs mt-1">6924</span>
        </div>
      </div>
    </div>
  );
}
