"use client";

import { useState } from "react";
import { Sidebar } from "@/components/custom/sidebar";
import { VideoPlayer } from "@/components/custom/video-player";
import { Carets } from "@/components/custom/carets";
import { MorePanel } from "@/components/custom/more-panel";

export default function Page() {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar onMoreClick={() => setIsMoreOpen(true)} />
      <main className="flex-1 overflow-auto relative">
        <VideoPlayer />
        <Carets />
        <MorePanel isOpen={isMoreOpen} onClose={() => setIsMoreOpen(false)} />
      </main>
    </div>
  );
}
