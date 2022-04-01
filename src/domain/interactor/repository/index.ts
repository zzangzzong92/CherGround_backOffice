import * as Entity from "../../entity/member";

export interface GetMemberRepository {
  getMember(): Promise<Entity.Member>;
}