export type SkyDataT = {
  data: {
    team: {
      subteamsTitle: string;
      subTeamsDescription: string;
      subTeamCard: SubTeamCardT[];
    };
  };
};

export type SubTeamCardT = {
  title: string;
  body: string;
  cta: CtaT[];
  video: VideoT[];
};

export type CtaT = {
  newTab: boolean;
  href: string;
  text: string;
};

export type VideoT = {
  video: {
    url: string;
    title: string;
  };
  placeholder: {
    url: string;
    alt: string;
  };
  label: string;
};
