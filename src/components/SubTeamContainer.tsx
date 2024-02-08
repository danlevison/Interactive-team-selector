"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import caretDownIcon from "@/../public/caret-down.svg";
import crossIcon from "@/../public/cross.svg";
import type { SubTeamCardT } from "@/types";

type SubTeamContainerProps = {
  subTeams: SubTeamCardT[];
};

export default function SubTeamContainer({ subTeams }: SubTeamContainerProps) {
  const searchParams = useSearchParams();
  const selectedSubTeamParam =
    searchParams.get("sub-team") || "Architecture & Technical Analysis";
  const selectedSubTeam =
    subTeams.find((team) => team.title.includes(selectedSubTeamParam)) ||
    subTeams[0];
  const [isExpanded, setIsExpanded] = useState(false);

  console.log(selectedSubTeam);

  return (
    <>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="dropdown-btn"
        aria-label="Open menu"
        aria-expanded={isExpanded}
      >
        {!selectedSubTeam?.title ? "Select a sub-team" : selectedSubTeam.title}
        <Image
          src={caretDownIcon}
          alt=""
          className="dropdown-caret-icon"
          aria-hidden={true}
        />
      </button>
      {isExpanded && (
        <div className="dropdown-menu animate-up">
          <div className="dropdown-menu-header">
            <h3 className="dropdown-menu-title">Select a sub-team</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="dropdown-menu-close-btn"
              aria-label="Close menu"
            >
              <Image src={crossIcon} alt="" aria-hidden={true} />
            </button>
          </div>
          <ul className="dropdown-menu-list">
            {subTeams.map((team) => (
              <li key={team.title} className="dropdown-menu-item">
                <Link
                  href={`?sub-team=${team.title}`}
                  onClick={() => setIsExpanded(false)}
                  scroll={false}
                  className={`dropdown-menu-item-btn ${
                    selectedSubTeam?.title === team.title ? "active" : ""
                  }`}
                >
                  {team.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
