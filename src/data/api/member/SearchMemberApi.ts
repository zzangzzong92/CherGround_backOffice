import { injectable } from "inversify";
import { SearchMemberApi } from "..";
import * as Entity from "../../../domain/entity/member";
import axios from "axios";

@injectable()
export default class SearchMemberApiImpl implements SearchMemberApi {
  searchMember(name: Entity.Member): Promise<Entity.Member> {
    return axios.get("localhost:8080/search?name");
  }
}