import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import playIcon from "@/../public/play-icon.svg";
import type { SubTeamCardT } from "@/types";

type SubTeamCardProps = {
  subTeamDetails: SubTeamCardT | null;
  hideForMobile: boolean;
};

export default function SubTeamCard({
  subTeamDetails,
  hideForMobile,
}: SubTeamCardProps) {
  const [showOverlay, setShowOverlay] = useState(true);

  const createEmbedUrl = (videoUrl: string) => {
    const embedUrl = videoUrl.replace(
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=/i,
      "https://www.youtube.com/embed/"
    );
    return embedUrl;
  };

  return (
    <div className={`sub-team-card ${hideForMobile ? "hide" : ""}`}>
      <div className="sub-team-card-left">
        <p className="sub-team-card-job-count">
          <strong>21</strong> jobs available
        </p>
        <h2 className="sub-team-card-title">{subTeamDetails?.title}</h2>
        <p className="sub-team-card-body">{subTeamDetails?.body}</p>
        {subTeamDetails?.cta[0].href && (
          <Link
            href={subTeamDetails?.cta[0].href}
            target={subTeamDetails?.cta[0].newTab ? "_blank" : "_parent"}
            className="sub-team-card-cta"
          >
            {subTeamDetails?.cta[0].text}
            <span className="sr-only">Opens in a new tab</span>
          </Link>
        )}
      </div>
      <div className="sub-team-card-right">
        {!subTeamDetails?.video[0].video ? (
          <>
            {subTeamDetails?.video[0].placeholder && (
              <Image
                src={subTeamDetails?.video[0].placeholder.url}
                alt={subTeamDetails?.video[0].placeholder.alt}
                width={500}
                height={500}
                className="sub-team-card-placeholder"
              />
            )}
          </>
        ) : (
          <>
            {showOverlay ? (
              <div className="sub-team-card-video-overlay">
                <Image
                  src={subTeamDetails.video[0].placeholder.url}
                  alt={subTeamDetails?.video[0].placeholder.alt}
                  priority
                  width={500}
                  height={500}
                  className="sub-team-card-image-overlay"
                />
                <button
                  onClick={() => setShowOverlay(false)}
                  className="sub-team-card-play-btn"
                >
                  <Image
                    src={playIcon}
                    alt=""
                    width={42}
                    height={42}
                    className="sub-team-card-play-icon"
                    aria-hidden={true}
                  />
                  Watch the film
                </button>
              </div>
            ) : (
              <iframe
                className="sub-team-card-video"
                src={`${createEmbedUrl(
                  subTeamDetails?.video[0].video.url
                )}?autoplay=1&mute=1`}
                title={subTeamDetails?.video[0].video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </>
        )}
      </div>
    </div>
  );
}
