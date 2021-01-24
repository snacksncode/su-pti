interface Informations {
  luckyNumber: {
    maxNumber: number;
    number: number;
    day: number;
  };
  team: TeamMember[];
  bgImg: string;
}
interface TeamMember {
  name: string;
  role: string;
  isLeader: boolean;
  img: string;
  desc: string;
}
