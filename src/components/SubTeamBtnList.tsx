import SubTeamBtn from "@/components/SubTeamBtn";
import type { SubTeamCardT } from "@/types";

type SubTeamBtnListProps = {
  subTeams: SubTeamCardT[];
  selectedSubTeam: SubTeamCardT;
};

export default function SubTeamBtnList({
  subTeams,
  selectedSubTeam,
}: SubTeamBtnListProps) {
  return (
    <ul className="sub-team-btn-list">
      {subTeams.map((team) => (
        <li key={team.title} className="sub-team-btn-item">
          <SubTeamBtn title={team.title} selectedSubTeam={selectedSubTeam} />
        </li>
      ))}
    </ul>
  );
}
