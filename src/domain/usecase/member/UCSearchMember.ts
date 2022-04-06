import { Member } from "domain/entity/member";
import { UCSearchMember } from "..";

export class UCSearchMemberImpl implements UCSearchMember {
  searchMember(name: string): Promise<Member> {
    return;
  }
}
