"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import SubTeamDropdown from "./SubTeamDropdown";
import SubTeamBtnList from "./SubTeamBtnList";
import SubTeamCard from "./SubTeamCard";
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
  const [hideForMobile, setHideForMobile] = useState(true);

  return (
    <>
      {isMobile ? (
        <SubTeamDropdown
          options={subTeams}
          selectedSubTeam={selectedSubTeam}
          hideForMobile={hideForMobile}
          setHideForMobile={setHideForMobile}
        />
      ) : (
        <SubTeamBtnList subTeams={subTeams} selectedSubTeam={selectedSubTeam} />
      )}

      {selectedSubTeam && (
        <SubTeamCard
          subTeamDetails={selectedSubTeam}
          hideForMobile={hideForMobile}
        />
      )}
    </>
  );
}
