import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const SUPASCRIBE_SCRIPT_SRC = "https://js.supascribe.com/v1/loader/vei9PtPxtThilZBNwcwu0afJjPk1.js";

interface SubstackFeedProps {
  embedId: string;
  substackUrl: string;
  ctaLabel?: string;
}

declare global {
  interface Window {
    Supascribe?: {
      refreshAll?: (root?: HTMLElement) => void;
      createWidgetFromDOM?: (embedId: string, element: HTMLElement, type: string) => void;
    };
  }
}

export const SubstackFeed = ({
  embedId,
  substackUrl,
  ctaLabel = "Leer más publicaciones",
}: SubstackFeedProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const initializeEmbed = () => {
      if (!container) {
        return;
      }

      if (window.Supascribe?.createWidgetFromDOM) {
        window.Supascribe.createWidgetFromDOM(embedId, container, "feed");
        return;
      }

      window.Supascribe?.refreshAll?.(container);
    };

    if (window.Supascribe) {
      initializeEmbed();
    }

    const script = document.querySelector<HTMLScriptElement>(
      `script[src="${SUPASCRIBE_SCRIPT_SRC}"]`
    );

    if (!window.Supascribe && script) {
      script.addEventListener("load", initializeEmbed);

      return () => {
        script.removeEventListener("load", initializeEmbed);
        container.replaceChildren();
      };
    }

    return () => {
      container.replaceChildren();
    };
  }, [embedId]);

  return (
    <>
      <div
        ref={containerRef}
        data-supascribe-embed-id={embedId}
        data-supascribe-feed=""
      />
      <div className="mt-8 text-center">
        <Button asChild size="lg">
          <a
            href={`https://${substackUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel}
          </a>
        </Button>
      </div>
    </>
  );
};
