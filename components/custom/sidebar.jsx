import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Home,
  Compass,
  Users,
  Plus,
  Radio,
  User,
  MoreHorizontal,
  Search,
} from "lucide-react";

export function Sidebar({ onMoreClick }) {
  return (
    <div className="w-[320px] border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4">
        <h1 className="text-3xl font-bold p-2">TikTok</h1>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search"
            className="pl-9 bg-gray-100 border-none"
          />
        </div>
      </div>

      <nav className="flex-1 px-2">
        <div className="space-y-1">
          <Link
            href="#"
            className="flex items-center px-3 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Home className="mr-4 h-6 w-6" />
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center px-3 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Compass className="mr-4 h-6 w-6" />
            Explore
          </Link>
          <Link
            href="#"
            className="flex items-center px-3 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Users className="mr-4 h-6 w-6" />
            Following
          </Link>
          <Link
            href="/upload"
            className="flex items-center px-3 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Plus className="mr-4 h-6 w-6" />
            Upload
          </Link>
          <Link
            href="#"
            className="flex items-center px-3 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <Radio className="mr-4 h-6 w-6" />
            LIVE
          </Link>
          <Link
            href="/profile"
            className="flex items-center px-3 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-md"
          >
            <User className="mr-4 h-6 w-6" />
            Profile
          </Link>
          <button
            onClick={onMoreClick}
            className="flex items-center px-3 py-2 text-lg text-gray-700 hover:bg-gray-100 rounded-md w-full"
          >
            <MoreHorizontal className="mr-4 h-6 w-6" />
            More
          </button>
        </div>
      </nav>

      {/* <div className="p-4 border-t border-gray-200">
        <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
          Log in
        </Button>
      </div> */}

      <footer className="p-4 text-sm text-gray-500 space-y-4">
        <div className="space-x-2">
          <Link href="#" className="hover:underline">
            Company
          </Link>
          <Link href="#" className="hover:underline">
            Program
          </Link>
          <Link href="#" className="hover:underline">
            Terms & Policies
          </Link>
        </div>
        <div>© 2025 TikTok</div>
      </footer>
    </div>
  );
}
