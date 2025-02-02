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
import { cn } from "@/lib/utils";
import { CommentModal } from "./comment-modal";

export function VideoPlayer({}) {
  const [isVolumeHovered, setIsVolumeHovered] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState(0);
  const [saves, setSaves] = useState(0);
  const [shares, setShares] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const handleComment = () => setIsCommentModalOpen(true);
  const handleCommentSubmit = () => {
    setComments((prev) => prev + 1);
    setIsCommentModalOpen(false);
  };

  const handleSave = () => {
    if (isSaved) {
      setSaves((prev) => prev - 1);
      setIsSaved(false);
    } else {
      setSaves((prev) => prev + 1);
      setIsSaved(true);
    }
  };
  const handleShare = () => setShares((prev) => prev + 1);

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
              className="h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              onClick={handleLike}
            >
              <Heart
                className={cn(
                  "h-6 w-6 transition-colors duration-200",
                  isLiked
                    ? "text-pink-500 fill-pink-500"
                    : "hover:text-pink-400"
                )}
              />
            </Button>
            <span className="text-xs mt-1">{likes}</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              onClick={handleComment}
            >
              <MessageCircle className="h-6 w-6 hover:text-gray-600 transition-colors duration-200" />
            </Button>
            <span className="text-xs mt-1">{comments}</span>
          </div>

          <div className="flex flex-col items-center">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              onClick={handleSave}
            >
              <Bookmark
                className={cn(
                  "h-6 w-6 transition-colors duration-200",
                  isSaved
                    ? "text-yellow-500 fill-yellow-500"
                    : "hover:text-yellow-400"
                )}
              />
            </Button>
            <span className="text-xs mt-1">{saves}</span>
          </div>

          <div className="flex flex-col items-center mb-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              onClick={handleShare}
            >
              <Share2 className="h-6 w-6 hover:text-gray-600 transition-colors duration-200" />
            </Button>
            <span className="text-xs mt-1">{shares}</span>
          </div>
        </div>
      </div>

      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={() => setIsCommentModalOpen(false)}
        onCommentSubmit={handleCommentSubmit}
      />
    </div>
  );
}
