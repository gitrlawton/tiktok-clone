"use client";

import { useState } from "react";
import {
  Upload,
  Video,
  FileVideo,
  RatioIcon as AspectRatio,
  User2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [videoSelected, setVideoSelected] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    setVideoSelected(true);
  };

  const handleFileSelect = () => {
    setVideoSelected(true);
  };

  if (videoSelected) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Upload status bar - full width */}
        <div className="bg-white">
          <div className="max-w-[1300px] mx-auto px-8 py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold">cat_being_fed.mp4</span>
                <span className="text-sm text-gray-500">540P</span>
              </div>
              <Button variant="outline">Replace</Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-green-600 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-600" />
              Uploaded (1.57MB)
            </div>
            <div className="h-1 w-full bg-green-600 rounded" />
          </div>
        </div>

        {/* Main content area */}
        <div className="max-w-[1300px] mx-auto p-8">
          <div className="flex gap-8">
            {/* Left column */}
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4">Details</h2>
                <Card className="p-6">
                  <div className="space-y-6">
                    <div>
                      <Textarea
                        placeholder="Description, #hashtags, @mentions"
                        className="bg-gray-50 min-h-[120px]"
                      />
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Cover</h3>
                      <div className="w-24 h-24 bg-gray-300 rounded"></div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Location</h3>
                      <Select>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Search locations">
                            <div className="flex items-center gap-2">
                              <User2 className="w-4 h-4" />
                              <span>Search locations</span>
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="location1">Location 1</SelectItem>
                          <SelectItem value="location2">Location 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-4">Settings</h2>
                <Card className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">When to post</h3>
                      <RadioGroup defaultValue="now" className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="now" id="now" />
                          <Label htmlFor="now">Now</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="schedule"
                            id="schedule"
                            disabled
                          />
                          <Label htmlFor="schedule" className="text-gray-400">
                            Schedule
                          </Label>
                        </div>
                      </RadioGroup>
                      <p className="text-xs text-gray-500 mt-1">
                        Private videos can't be scheduled.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">
                        Who can watch this video
                      </h3>
                      <Select defaultValue="private">
                        <SelectTrigger>
                          <SelectValue>Only you</SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="private">Only you</SelectItem>
                          <SelectItem value="public">Everyone</SelectItem>
                          <SelectItem value="friends">Friends</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Checks</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span>Run a copyright check</span>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex gap-4">
                <Button
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8"
                  onClick={() => (window.location.href = "/videos")}
                >
                  Post
                </Button>
                <Button variant="outline">Discard</Button>
              </div>
            </div>

            {/* Right column - preview */}
            <div className="w-[400px] pt-11">
              <div className="w-[300px] h-[600px] bg-gray-300 rounded-lg mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1300px] mx-auto p-8">
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-12 text-center",
          isDragging ? "border-gray-400 bg-gray-50" : "border-gray-300"
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* Original upload UI */}
        <div className="max-w-[1000px] mx-auto">
          <div className="mb-6">
            <div className="w-[40px] h-[40px] mx-auto mb-4">
              <Upload className="w-full h-full text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold mb-1">
              Select video to upload
            </h2>
            <p className="text-gray-500">Or drag and drop it here</p>
          </div>

          <Button
            className="bg-pink-500 hover:bg-pink-600 text-white px-8"
            onClick={handleFileSelect}
          >
            Select video
          </Button>

          <div className="mt-24 grid grid-cols-4 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                <span className="font-medium">Size and duration</span>
              </div>
              <p className="text-gray-500 text-xs">
                Maximum size: 10 GB, video duration: 60 minutes.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileVideo className="w-5 h-5" />
                <span className="font-medium">File formats</span>
              </div>
              <p className="text-gray-500 text-xs">
                Recommended: ".mp4". Other major formats are supported.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5" />
                <span className="font-medium">Video resolutions</span>
              </div>
              <p className="text-gray-500 text-xs">
                High-resolution recommended: 1080p, 1440p, 4K.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AspectRatio className="w-5 h-5" />
                <span className="font-medium">Aspect ratios</span>
              </div>
              <p className="text-gray-500 text-xs">
                Recommended: 16:9 for landscape, 9:16 for vertical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
