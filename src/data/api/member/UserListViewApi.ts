import Axios from "axios";

export default class UserListViewApi {
  getUserList(sort: string) {
    return Axios.get(
      `http://localhost:8000/user?sort=${sort}&page=1&amount=15`,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
      }
    );
  }

  getUserCount() {
    return Axios.get(`http://localhost:8000/user/count`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    });
  }

  getPageContent(pageNumber: number, sort: string) {
    return Axios.get(
      `http://localhost:8000/user?sort=${sort}&page=${pageNumber}&amount=15`,
      {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
      }
    );
  }
}
