import { Member } from "domain/entity/member";

export interface UCSearchMember {
  searchMember(name: string): Promise<Member>;
}
