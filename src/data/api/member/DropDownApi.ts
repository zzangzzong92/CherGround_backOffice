import Axios from "axios";

export default class DropDownApi {
  getSort(groupId: string, sort: string) {
    return Axios.get(
      `http://localhost:8000/group/${groupId}/member?sort=${sort}&page=1&amount=15`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
      }
    );
  }
}
