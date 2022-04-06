import * as Entity from "../../../domain/entity/member";
import { injectable } from "inversify";
import { GetMemberApi } from "..";
import axios from "axios";

@injectable()
export default class GetMemberApiImpl implements GetMemberApi {
  getMember(): Promise<Entity.Member> {
    return axios.get("localhost:8080/member/group/1?sort=name");
  }
}
