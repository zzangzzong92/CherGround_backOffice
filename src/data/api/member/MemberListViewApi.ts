import Axios from "axios";

export default class MemberListViewApi {
  searchNameAndPart(search: any) {
    return Axios.get(`http://localhost:8000/searchUser?name=${search}`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    });
  }
}
