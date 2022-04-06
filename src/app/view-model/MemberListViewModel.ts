import { Member } from "domain/entity/member";
import { injectable } from "inversify";
import { MemberListViewModel } from ".";

@injectable()
export class MemberListViewModelImpl implements MemberListViewModel {
  searchMember(name: string): Promise<Member> {

  }
}
