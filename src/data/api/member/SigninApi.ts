import Axios from "axios";

export default class SigninApi {
  singin(emailInput: string, pwInput: string) {
    return Axios.post(`http://localhost:8000/user/signin`, {
      headers: {
        "content-type": "application/json",
        mode: "cors",
      },
      email: emailInput,
      password: pwInput,
    });
  }
}
