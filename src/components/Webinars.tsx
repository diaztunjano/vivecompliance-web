import { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { Card, CardContent } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

// Types for YouTube API responses
interface VideoItem {
  id: {
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

// Fallback videos in case the API fails
const FALLBACK_VIDEOS = [
  {
    id: { videoId: "qEkewUbN0W0" },
    snippet: {
      publishedAt: "2023-01-01T00:00:00Z",
      title: "Video de Vive Compliance",
      description: "Video de Vive Compliance cuando la API de YouTube no está disponible.",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/qEkewUbN0W0/hqdefault.jpg",
        },
      },
    },
  },
  {
    id: { videoId: "yLzYGjKqH_A" },
    snippet: {
      publishedAt: "2023-01-02T00:00:00Z",
      title: "Video de Vive Compliance",
      description: "Video de Vive Compliance cuando la API de YouTube no está disponible.",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/yLzYGjKqH_A/hqdefault.jpg",
        },
      },
    },
  },
  {
    id: { videoId: "BdSI2rr35Gc" },
    snippet: {
      publishedAt: "2023-01-03T00:00:00Z",
      title: "Video de Vive Compliance",
      description: "Video de Vive Compliance cuando la API de YouTube no está disponible.",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/BdSI2rr35Gc/hqdefault.jpg",
        },
      },
    },
  },
  {
    id: { videoId: "WbqIWQI2vKw" },
    snippet: {
      publishedAt: "2023-01-04T00:00:00Z",
      title: "Video de Vive Compliance",
      description: "Video de Vive Compliance cuando la API de YouTube no está disponible.",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/WbqIWQI2vKw/hqdefault.jpg",
        },
      },
    },
  },
];

export const Webinars= () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);

        // Get videos from Cloudflare Worker
        const response = await fetch('https://vivecomplianceyoutube.david-diaz-tunjano.workers.dev/');

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const videos = await response.json();

        if (!videos || videos.length === 0) {
          throw new Error("No videos found");
        }

        setVideos(videos);

        // Set the first video as active
        if (videos.length > 0) {
          setActiveVideo(videos[0].id.videoId);
        }
      } catch (err) {
        let errorMessage = "No se pudieron cargar los videos más recientes.";

        if (err instanceof Error) {
          errorMessage += ` ${err.message}`;
        }

        setError(errorMessage + " Mostrando videos alternativos.");
        setVideos(FALLBACK_VIDEOS);
        setActiveVideo(FALLBACK_VIDEOS[0].id.videoId);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const handleVideoSelect = (videoId: string) => {
    setActiveVideo(videoId);
    setIsPlaying(true);
    // Scroll to top of section on mobile
    if (window.innerWidth < 768) {
      const section = document.getElementById("howItWorks");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const videoOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: isPlaying ? 1 : 0,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <section
      id="webinars"
      className="container py-24 lg:py-32 overflow-hidden"
    >
      <div className="text-center mb-16 lg:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Videos y{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Webinars
          </span>
        </h2>
        <p className="md:w-2/3 mx-auto mt-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
          Mantente actualizado con nuestro contenido y suscríbete a nuestro canal para recibir las últimas novedades en compliance
        </p>
      </div>

      {error && (
        <div className="text-center text-red-500 mb-8 p-4 bg-red-50 rounded-lg">
          <p className="font-medium">{error}</p>
          <p className="text-sm mt-2">
            Estamos mostrando videos seleccionados de Vive Compliance.
          </p>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-4">
        {loading ? (
          <VideoGallerySkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Featured Video */}
            <div className="lg:col-span-2 space-y-4">
              {activeVideo && (
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-border/20 shadow-lg bg-card">
                  <YouTube
                    videoId={activeVideo}
                    opts={videoOpts}
                    className="absolute inset-0 w-full h-full"
                    onReady={(event: { target: { playVideo: () => void } }) => {
                      if (isPlaying) {
                        event.target.playVideo();
                      }
                    }}
                  />
                </div>
              )}

              {/* Main Video Info */}
              {videos.length > 0 && activeVideo && (
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold line-clamp-2">
                    {videos.find(v => v.id.videoId === activeVideo)?.snippet.title}
                  </h3>
                  <div className="text-sm text-muted-foreground">
                    <span>
                      {formatDate(videos.find(v => v.id.videoId === activeVideo)?.snippet.publishedAt || '')}
                    </span>
                  </div>
                  <p className="text-muted-foreground line-clamp-3 mt-2">
                    {videos.find(v => v.id.videoId === activeVideo)?.snippet.description}
                  </p>

                  <a
                    href={`https://www.youtube.com/watch?v=${activeVideo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary hover:text-primary/80 font-medium"
                  >
                    Ver en YouTube
                  </a>
                </div>
              )}
            </div>

            {/* Video List */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2 border-border/30">
                Videos recientes
              </h3>
              <div className="space-y-4">
                {videos.map((video) => (
                  <Card
                    key={video.id.videoId}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-md overflow-hidden ${
                      activeVideo === video.id.videoId
                        ? 'border-primary/50 bg-primary/5'
                        : 'border-border/20'
                    }`}
                    onClick={() => handleVideoSelect(video.id.videoId)}
                  >
                    <CardContent className="p-3">
                      <div className="flex gap-3">
                        {/* Thumbnail */}
                        <div className="relative flex-shrink-0 w-32 h-20 rounded-md overflow-hidden">
                          <img
                            src={video.snippet.thumbnails.high.url}
                            alt={video.snippet.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 text-white ml-0.5"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Video Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2">
                            {video.snippet.title}
                          </h4>
                          <div className="text-xs text-muted-foreground mt-1">
                            {formatDate(video.snippet.publishedAt)}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Subscribe Button */}
              <a
                href="https://www.youtube.com/@ViveCompliance?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors w-full justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M12.244 4c.534.003 1.87.016 3.29.073l.504.021c1.429.067 2.857.183 3.566.38.945.266 1.687 1.04 1.938 2.022.4 1.56.458 4.662.458 5.504v.001c0 .845-.058 3.946-.459 5.504-.25.981-.992 1.756-1.937 2.022-.709.197-2.137.313-3.566.38l-.504.022c-1.42.056-2.756.07-3.29.072h-.49c-.534-.003-1.87-.016-3.29-.073l-.504-.021c-1.429-.067-2.857-.183-3.566-.38-.945-.266-1.687-1.04-1.938-2.022-.4-1.56-.458-4.662-.458-5.504v-.001c0-.845.058-3.946.459-5.504.25-.981.992-1.756 1.937-2.022.709-.197 2.137-.313 3.566-.38l.504-.022c1.42-.056 2.756-.07 3.29-.072h.49zM9.999 8.5v7l6-3.5-6-3.5z" />
                </svg>
                Suscribirse al canal
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Loading skeleton component
const VideoGallerySkeleton = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Main Video Skeleton */}
      <div className="lg:col-span-2 space-y-4">
        <Skeleton className="aspect-video w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-4 w-1/3" />
          <div className="space-y-1 pt-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>

      {/* Video List Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-7 w-1/2" />
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-3">
              <Skeleton className="w-32 h-20 rounded-md flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
