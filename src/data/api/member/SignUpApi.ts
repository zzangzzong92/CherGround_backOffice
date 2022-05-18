import Axios from "axios";

export default class SignUpApi {
  signUp(
    nameInput: string,
    pwInput: string,
    emailInput: string,
    phoneNumberInput: number | string
  ) {
    return Axios.post(`http://localhost:8000/user/signup`, {
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
      },
      name: nameInput,
      password: pwInput,
      email: emailInput,
      phoneNumber: phoneNumberInput,
    });
  }
}
