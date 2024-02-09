import Image from "next/image";
import caretDownIcon from "@/../public/caret-down.svg";
import type { SubTeamCardT } from "@/types";

type SubTeamDropdownBtnProps = {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  selectedSubTeam: SubTeamCardT | null;
  hideForMobile: boolean;
};

export default function SubTeamDropdownBtn({
  isExpanded,
  setIsExpanded,
  selectedSubTeam,
  hideForMobile,
}: SubTeamDropdownBtnProps) {
  return (
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
  );
}
