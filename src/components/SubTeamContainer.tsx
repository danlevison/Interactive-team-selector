"use client";

import { useSearchParams } from "next/navigation";
import SubTeamDropdown from "./SubTeamDropdown";
import SubTeamBtnList from "./SubTeamBtnList";
import useMediaQuery from "@/hooks/useMediaQuery";
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
  const isMobile = useMediaQuery("(max-width: 719px)");

  return (
    <>
      {isMobile ? (
        <SubTeamDropdown options={subTeams} selectedSubTeam={selectedSubTeam} />
      ) : (
        <SubTeamBtnList subTeams={subTeams} selectedSubTeam={selectedSubTeam} />
      )}
    </>
  );
}
