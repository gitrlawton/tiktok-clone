"use client";

import { useState } from "react";
import {
  Search,
  Lock,
  AlignJustify,
  Pencil,
  Link,
  MessageCircle,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function VideosPage() {
  const [activeFilter, setActiveFilter] =
    (useState < "views") | "likes" | "comments" | ("privacy" > "views");

  return (
    <div className="p-8 max-w-[1300px] mx-auto">
      <div className="flex justify-between mb-6">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setActiveFilter("views")}
            size="sm"
            className="gap-2"
          >
            <AlignJustify className="h-4 w-4" />
            Views
          </Button>
          <Button
            variant="outline"
            onClick={() => setActiveFilter("likes")}
            size="sm"
            className="gap-2"
          >
            <AlignJustify className="h-4 w-4" />
            Likes
          </Button>
          <Button
            variant="outline"
            onClick={() => setActiveFilter("comments")}
            size="sm"
            className="gap-2"
          >
            <AlignJustify className="h-4 w-4" />
            Comments
          </Button>
          <Button
            variant="outline"
            onClick={() => setActiveFilter("privacy")}
            size="sm"
            className="gap-2"
          >
            <AlignJustify className="h-4 w-4" />
            Privacy
          </Button>
        </div>
        <div className="relative w-[300px]">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search for post description"
            className="pl-9 rounded-full border-gray-200"
          />
        </div>
      </div>

      <Card className="p-4">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-[400px] font-medium">
                Posts (Created on)
              </TableHead>
              <TableHead className="font-medium">Privacy</TableHead>
              <TableHead className="text-right font-medium">Views</TableHead>
              <TableHead className="text-right font-medium">Likes</TableHead>
              <TableHead className="text-right font-medium">Comments</TableHead>
              <TableHead className="text-right font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex gap-4">
                  <div className="w-[100px] h-[100px] bg-gray-300 rounded" />
                  <div>
                    <div className="font-medium">cat_being_fed</div>
                    <div className="text-sm text-gray-500">Jan 28, 11:26AM</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1 text-gray-600">
                  <Lock className="h-4 w-4" />
                  Only me
                </div>
              </TableCell>
              <TableCell className="text-right">0</TableCell>
              <TableCell className="text-right">0</TableCell>
              <TableCell className="text-right">0</TableCell>
              <TableCell>
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Link className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
