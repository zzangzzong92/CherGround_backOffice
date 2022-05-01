import React, { useState } from "react";
import { useHistory } from "react-router";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Cherground from "../../../../app/view/assets/images/Cherground.svg";

export default function SignIn() {
  const [emailInput, setEmailInput] = useState<string>("");
  const [pwInput, setPwInput] = useState<string>("");

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handlePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwInput(e.target.value);
  };

  const history = useHistory();

  const goSignUp = () => {
    history.push("/signup");
  };

  //로그인 validation 정규식으로 적용하기! 너무 어렵다면 인터넷에 만들어져 있는걸 활용할 계획

  const goMain = () => {
    fetch(`http://localhost:8080/user/signin`, {
      method: "post",
      headers: {
        "content-type": "application/json",
        mode: "cors",
      },
      body: JSON.stringify({
        email: emailInput,
        password: pwInput,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        sessionStorage.setItem("ID", result.token);
      })
      .then(() => {
        history.push("/");
      });
  };

  // onLogin = () => {
  //   const data = { emailInput, pwInput };
  //   axios.post('/login', data).then(response => {
  //     const { accessToken } = response.data;
  //     axios.defaults.headers.common[] = `Bearer ${accessToken}`;
  //   }).catch(error = {
  //     console.log("오류");

  //   })
  // };

  return (
    <LoginContainer>
      <Top>
        <Logo>
          <Cherground />
        </Logo>
      </Top>
      <Middle>
        <FormWrapper>
          <InputDiv>
            <InputSpan>이메일</InputSpan>
            <TextInput
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              onChange={handleEmailInput}
            ></TextInput>
          </InputDiv>

          <InputDiv>
            <InputSpan>비밀번호</InputSpan>
            <TextInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePwInput}
            ></TextInput>
          </InputDiv>

          <RegisterButton onClick={goSignUp}>
            <RegisterSapn>회원가입</RegisterSapn>
          </RegisterButton>
        </FormWrapper>
      </Middle>
      <Bottom>
        <ButtonWrapper>
          <CloseButton>
            <Close>취소</Close>
          </CloseButton>
          <SubmitButton onClick={goMain}>
            <Submit>확인</Submit>
          </SubmitButton>
        </ButtonWrapper>
      </Bottom>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 500px;
  height: 450px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Top = styled.div`
  width: 500px;
  height: 100px;
`;

const Logo = styled.div`
  width: 100px;
  height: 70px;
  margin: 30px auto 0;
`;

const Middle = styled.div`
  width: 500px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const InputDiv = styled.div`
  width: 400px;
  height: 50px;
  margin: 16px 30px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background-color: #ebeff5;
`;

const InputSpan = styled.div`
  font-size: 15px;
  color: rgba(44, 50, 61, 0.6);
  margin: 4px 4px;
`;

const TextInput = styled.input`
  border: none;
  outline: none;
  width: 200px;
  font-size: 15px;
  border-radius: 4px;
  margin: 6px 12px;
  background-color: #ebeff5;
`;

const RegisterButton = styled.div`
  width: 400px;
  height: 50px;
  margin: 16px 30px;
  background-color: black;
  border-radius: 4px;
  cursor: pointer;
`;

const RegisterSapn = styled.div`
  width: 60px;
  height: 20px;
  color: white;
  margin: 14px auto;
`;

const Bottom = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const CloseButton = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 100px;
`;

const Close = styled.div`
  width: 30px;
  height: 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  color: #333840;
  text-align: center;
  margin: 10px auto;
`;

const SubmitButton = styled.div`
  width: 100px;
  height: 50px;
  margin-left: 30px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  background-color: rgba(70, 77, 90, 0.12);
  border-radius: 4px;
  cursor: pointer;
`;

const Submit = styled.div`
  width: 30px;
  height: 20px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  color: #333840;
  text-align: center;
  margin: 10px auto;
`;
