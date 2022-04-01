export type PositionType = ["대표", "이사", "트라이브 리더/파트 리더", "파트 리더", "매니저", "아웃소싱"];

export type JobType = ["대표", "이사", "트라이브 리더", "파트장", "개발", "디자인", "재무", "인사", "영업", "정산", ""]; 

export type GroupType = ["대표", "임원", "전략 파트", "기획 파트", "영업 파트", "개발 파트", "재무 파트", "재무 파트", "현장 파트", "마케팅 파트", "커머스 파트", "기획 파트", "디자인 파트", "인사 파트"]

export interface Member {
  id: number; //http에서 pathParameter에 넣으면 숫자를 넣어도 string으로 가니깐 = string
  profileImgUrl: string | null;
  name: string;
  position: PositionType[]; //직책
  job: string; //직무
  group: string[];
  isLeader: boolean; //각 파트리더 유무, 별표설정
  phoneNumber: number;
  email: string;
}

export interface Group{
  id: number;
  name: string;
  member: Member;
}