import * as Entity from "../../domain/entity/member";

export interface GetMemberApi {
  getMember(): Promise<Entity.Member>;
}

export interface SearchMemberApi {
  searchMember(name: Entity.Member): Promise<Entity.Member>;
}
