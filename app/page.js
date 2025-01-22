import { Sidebar } from "./components/sidebar";
import { VideoPlayer } from "./components/video-player";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <VideoPlayer />
      </main>
    </div>
  );
}
