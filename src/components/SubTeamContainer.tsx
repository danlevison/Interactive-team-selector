"use client";

import { useSearchParams } from "next/navigation";
import SubTeamDropdown from "./SubTeamDropdown";
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

  console.log(selectedSubTeam);

  return (
    <>
      <SubTeamDropdown options={subTeams} selectedSubTeam={selectedSubTeam} />
    </>
  );
}
