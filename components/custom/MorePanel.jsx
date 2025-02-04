import { X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MorePanel({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 left-[320px] w-[320px] bg-white border-l border-gray-200 z-50">
      <div className="flex items-center gap-3 p-4 border-b">
        <h2 className="text-xl font-semibold flex-1">More</h2>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="p-2">
        <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg">
          Create TikTok effects
        </button>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg flex items-center justify-between">
          Creator tools
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg flex items-center justify-between">
          English
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg flex items-center justify-between">
          Dark mode
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </button>

        <button className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-lg">
          Feedback and help
        </button>
      </div>
    </div>
  );
}
