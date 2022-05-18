import Axios from "axios";

export default class GroupSelectViewApi {
  getGroupMember() {
    return Axios.get(`http://localhost:8000/user?sort=name&page=1&amount=15`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    });
  }
  searchMember(search: any) {
    return Axios.get(`http://localhost:8000/search?name=${search}`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    });
  }
  addGroup(addGroupNameInput: string) {
    return Axios.post(`http://localhost:8000/group`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("ID")}`,
      },
      name: addGroupNameInput,
    });
  }
}
