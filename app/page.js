import { Sidebar } from "../components/custom/sidebar";
import { VideoPlayer } from "../components/custom/video-player";
import { Carets } from "../components/custom/carets";

export default function Page() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto relative">
        <VideoPlayer />
        <Carets />
      </main>
    </div>
  );
}
