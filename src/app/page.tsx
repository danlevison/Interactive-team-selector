import { Suspense } from "react";
import { promises as fs } from "fs";
import Hero from "@/components/Hero";
import SubTeamContainer from "@/components/SubTeamContainer";
import Spinner from "@/components/Spinner";
import type { SkyDataT } from "@/types";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/data.json", "utf8");
  const data = JSON.parse(file) as SkyDataT;
  const { team } = data.data;

  return (
    <main className="container">
      <Hero title={team.subteamsTitle} description={team.subTeamsDescription} />
      <Suspense fallback={<Spinner />}>
        <SubTeamContainer subTeams={team.subTeamCard} />
      </Suspense>
    </main>
  );
}
