import Axios from "axios";

export default class MemberMainViewApi {
  getMemberInfo() {
    return Axios.get("http://localhost:8000/group", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    });
  }
}
