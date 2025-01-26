import { ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Carets() {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col justify-center space-y-4">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full bg-gray-100"
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full bg-gray-100"
      >
        <ChevronDown className="h-5 w-5" />
      </Button>
    </div>
  );
}
