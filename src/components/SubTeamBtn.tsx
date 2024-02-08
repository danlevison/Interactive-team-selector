import Link from "next/link";
import { SubTeamCardT } from "@/types";

type SubTeamButtonProps = {
  title: string;
  selectedSubTeam: SubTeamCardT | null;
};

export default function SubTeamBtn({
  title,
  selectedSubTeam,
}: SubTeamButtonProps) {
  return (
    <Link
      href={`?sub-team=${title}`}
      scroll={false}
      className={`sub-team-btn ${
        selectedSubTeam?.title === title ? "active" : ""
      }`}
    >
      {title}
    </Link>
  );
}
