"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Overlay from "@/components/Overlay";
import caretDownIcon from "@/../public/caret-down.svg";
import crossIcon from "@/../public/cross.svg";
import type { SubTeamCardT } from "@/types";

type SubTeamDropdownProps = {
  options: SubTeamCardT[];
  selectedSubTeam: SubTeamCardT | null;
  hideForMobile: boolean;
  setHideForMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SubTeamDropdown({
  options,
  selectedSubTeam,
  hideForMobile,
  setHideForMobile,
}: SubTeamDropdownProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOptionClick = () => {
    setIsExpanded(false);
    setHideForMobile(false);
  };

  return (
    <>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="dropdown-btn"
        aria-label="Open menu"
        aria-expanded={isExpanded}
      >
        {!selectedSubTeam?.title || hideForMobile
          ? "Select a sub-team"
          : selectedSubTeam.title}
        <Image
          src={caretDownIcon}
          alt=""
          className="dropdown-caret-icon"
          aria-hidden={true}
        />
      </button>
      {isExpanded && (
        <Overlay isExpanded={isExpanded} setIsExpanded={setIsExpanded}>
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
              {options.map((option) => (
                <li key={option.title} className="dropdown-menu-item">
                  <Link
                    href={`?sub-team=${option.title}`}
                    onClick={handleOptionClick}
                    scroll={false}
                    className={`dropdown-menu-item-btn ${
                      selectedSubTeam?.title === option.title ? "active" : ""
                    }`}
                  >
                    {option.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Overlay>
      )}
    </>
  );
}
