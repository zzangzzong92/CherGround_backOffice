import { Member } from "domain/entity/member";

export interface MemberListViewModel {
  searchMember(name: string): Promise<Member>;
}
