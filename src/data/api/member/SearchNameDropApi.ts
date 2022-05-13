import Axios from "axios";

export default class SearchNameDropApi {
  selectName(id: any) {
    return Axios.get(`http://localhost:8000/user/${id}`, {
      headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    });
  }
}
