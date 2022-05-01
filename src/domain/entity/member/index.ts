export type Position = "대표" | "이사" | "트라이브 리더" | "파트 리더" | "매니저";

export type Job = "대표" | "임원";

export interface User {
  id: number;
  name: string;
  imgUrl: string;
  position: ("대표" | "임원")[];
  job: "대표" | "임원";
  phoneNumber: string;
  email: string;
}
export interface Group {
  //그룹안에서는 복수의 유저가 존재
  id: number;
  name: string;
  users: User[];
}
  // 개인이 복수의 그룹에 속해있다면, 한 그룹에서는 리더일 수 있지만, 다른 한쪽에서는 팀원일 수 있으니
export interface Member {
  id: number;
  group: Group;
  user: User;
  isLeader: boolean;
}
