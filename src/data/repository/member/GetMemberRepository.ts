import * as Entity from "../../../domain/entity/member";
import { injectable, inject } from "inversify";
import { GetMemberRepository } from "domain/interactor/repository";
import { GetMemberApi } from "data/api";

@injectable()
export default class GetMemberRepositoryImpl implements GetMemberRepository {
  private getMemberApi: GetMemberApi;

  constructor(@inject("GetMemberApi") getMemberApi: GetMemberApi) {
    this.getMemberApi = getMemberApi;
  }

  getMember(): Promise<Entity.Member> {
    return this.getMemberApi.getMember();
  }
}