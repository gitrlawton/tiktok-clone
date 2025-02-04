# TikTok Clone

## Overview

This project is a web application that mimics the look of TikTok's desktop application, allowing users to upload, view, and interact with videos. The application features a user-friendly interface for video playback, uploading, and commenting, utilizing modern web technologies such as React and Next.js.

## Features

- **Video Upload**: Users can upload videos to the platform, with support for various video formats.
- **Video Playback**: Users can view videos with controls for play, pause, and volume adjustment.
- **User Interaction**: Users can like, comment, and share videos, enhancing engagement.
- **Profile Management**: Users can view and edit their profiles, along with their uploaded videos and statistics.
- **Search and Filter**: Users can search for videos and filter them based on views, likes, and comments.

## Installation

To set up the project, ensure you have Node.js installed on your machine. Then, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required packages:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash:README.md
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. Navigate to the homepage to view the latest videos.
2. Use the upload feature to add your own videos.
3. Interact with videos by liking, commenting, and sharing.
4. Explore user profiles to see their uploaded content and statistics.

## File Descriptions

- **app/page.js**: The main entry point for the application, handling video fetching and rendering the homepage.
- **app/upload/page.jsx**: The component responsible for the video upload functionality.
- **app/profile/page.jsx**: The user profile page displaying user information and their uploaded videos.
- **app/videos/page.jsx**: The page displaying a list of videos with options to filter and search.
- **app/api/list-videos/route.js**: The API route for fetching the list of videos from the server.
- **app/api/upload-video/route.js**: The API route for handling video uploads.
- **components/custom/VideoPlayer.jsx**: The video player component that handles video playback and user interactions.
- **components/custom/Carets.jsx**: The component for navigation controls to switch between videos on the homepage.

## Dependencies

- **React**: For building the user interface.
- **Next.js**: For server-side rendering and API routes.
- **Lucide React**: For icons used throughout the application.
- **Vercel Blob**: For handling video uploads and storage.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
