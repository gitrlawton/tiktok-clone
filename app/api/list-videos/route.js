import { list } from "@vercel/blob";

export async function GET() {
  try {
    const { blobs } = await list();

    // Filter for video files based on common video extensions
    const videoFiles = blobs.filter((blob) => {
      const videoExtensions = [".mp4", ".mov", ".avi", ".wmv", ".webm"];
      return videoExtensions.some((ext) =>
        blob.pathname.toLowerCase().endsWith(ext)
      );
    });

    return Response.json({
      videos: videoFiles.map((blob) => ({
        url: blob.url,
        pathname: blob.pathname,
        size: blob.size,
        uploadedAt: blob.uploadedAt,
      })),
    });
  } catch (error) {
    return Response.json({ error: "Failed to fetch videos" }, { status: 500 });
  }
}
