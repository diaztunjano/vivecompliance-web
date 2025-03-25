import { useEffect } from 'react';
import { Button } from "./ui/button";

interface SubstackFeedProps {
  substackUrl: string;
  postsCount?: number;
  layout?: 'right' | 'left';
}

declare global {
  interface Window {
    SubstackFeedWidget?: {
      substackUrl: string;
      posts: number;
      layout: 'right' | 'left';
      colors: {
        primary: string;
        secondary: string;
        background: string;
      };
    };
  }
}

export const SubstackFeed = ({
  substackUrl,
  postsCount = 3,
  layout = 'right',
}: SubstackFeedProps) => {
  useEffect(() => {
    // Configure the widget
    window.SubstackFeedWidget = {
      substackUrl,
      posts: postsCount,
      layout,
      colors: {
        // Color primario más suave para títulos y enlaces
        primary: "#0B2447",
        // Color secundario más sutil para mejor legibilidad
        secondary: "#4A5568",
        // Color de fondo ligeramente tintado para mejor integración
        background: "#FAFAFA",
      },
    };

    // Load the Substack script
    const script = document.createElement('script');
    script.src = 'https://substackapi.com/embeds/feed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
      delete window.SubstackFeedWidget;
    };
  }, [substackUrl, postsCount, layout]);

  return (
    <>
      <div id="substack-feed-embed" />
      <div className="mt-8 text-center">
        <Button
          asChild
          size="lg"
        >
          <a
            href={`https://${substackUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leer más publicaciones
          </a>
        </Button>
      </div>
    </>
  );
};