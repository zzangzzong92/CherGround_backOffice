import Axios from "axios";

export default class UserMainViewApi {
  getUserInfo() {
    return Axios.get("http://localhost:8000/group", {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    });
  }
}
