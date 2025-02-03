import { handleUpload } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        return {
          allowedContentTypes: [
            "video/mp4",
            "video/quicktime",
            "video/x-msvideo",
          ],
          maximumSizeInBytes: 100 * 1024 * 1024, // 100MB max file size
          metadata: {
            uploadedAt: new Date().toISOString(),
            originalName: pathname,
          },
        };
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 } // The webhook will retry 5 times waiting for a status 200
    );
  }
}
