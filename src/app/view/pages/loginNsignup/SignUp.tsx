import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Cherground from "../../../../app/view/assets/images/Cherground.svg";

// type SignUpValidationProps = {
//   name: string;
//   password: string;
//   email: string;
//   phoneNumber: string | number;
// };

export default function SignUp() {
  const [nameValidation, setNameValidation] = useState<boolean>(false);
  const [pwValidation, setPwValidation] = useState<boolean>(false);
  const [emailValidation, setEmailValidation] = useState<boolean>(false);
  const [phoneValidation, setPhoneValidation] = useState<number>(0);

  const [nameInput, setNameInput] = useState<string>("");
  const [pwInput, setPwInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const [phoneNumberInput, setPhoneInput] = useState<number | string>("");

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  };

  const handlePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwInput(e.target.value);
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneInput(e.target.value);
  };

  // const validateName = () => {
  //   if (!nameInput) {
  //     setEmailErrorText("이름을 입력해주세요");
  //   } else if (nameInput.length < 2) {
  //     setNameErrorText("이름은 최소 2자 이상입니다.");
  //   } else {
  //     setEmailErrorText("");
  //   }
  // };

  // const validateEmail = () => {
  //   if()
  // }

  const submit: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/user/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
      },
      body: JSON.stringify({
        name: nameInput,
        password: pwInput,
        email: emailInput,
        phoneNumber: phoneNumberInput,
      }),
    }).then(() => history.push("/signin"));
  };

  const history = useHistory();
  const cancelButton = () => {
    history.push("/");
  };

  //이름은 2글자 이상, 이메일 @포함, 비밀번호 특수문자 포함 (정규식?), 폰 -무시
  useEffect(() => {
    const nameValidation = nameInput.length >= 2;
    const emailValidation =
      emailInput.includes("@") &&
      emailInput.includes(".") &&
      emailInput.length >= 5;
    const pwValidation = pwInput.length >= 5;

    nameValidation ? setNameValidation(true) : setNameValidation(false);
    emailValidation ? setEmailValidation(true) : setEmailValidation(false);
    pwValidation ? setPwValidation(true) : setPwValidation(false);
  }, [nameInput, emailInput, pwInput]);

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
            <InputSpan>이름</InputSpan>
            <TextInput
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={handleNameInput}
            ></TextInput>
          </InputDiv>

          <InputDiv>
            <InputSpan>비밀번호</InputSpan>
            <TextInput
              type="text"
              placeholder="비밀번호를 입력해주세요"
              onChange={handlePwInput}
            ></TextInput>
          </InputDiv>

          <InputDiv>
            <InputSpan>이메일</InputSpan>
            <TextInput
              type="text"
              placeholder="이메일 주소를 입력해주세요"
              onChange={handleEmailInput}
            ></TextInput>
          </InputDiv>

          <InputDiv>
            <InputSpan>휴대폰 번호</InputSpan>
            <TextInput
              type="text"
              placeholder="휴대폰 번호를 입력해주세요 ( - 없이)"
              onChange={handlePhoneInput}
            ></TextInput>
          </InputDiv>
        </FormWrapper>
      </Middle>
      <Bottom>
        <ButtonWrapper>
          <CloseButton onClick={cancelButton}>
            <Close>취소</Close>
          </CloseButton>
          <SubmitButton
            onClick={submit}
            style={{
              backgroundColor:
                nameValidation && emailValidation
                  ? "#333840"
                  : "rgba(70, 77, 90, 0.12)",
            }}
          >
            <Submit
              style={{
                color:
                  nameValidation && emailValidation
                    ? "#FFFFFF"
                    : "rgba(70, 77, 90, 0.26)",
              }}
            >
              확인
            </Submit>
          </SubmitButton>
        </ButtonWrapper>
      </Bottom>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 470px;
  height: 550px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
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
  height: 55px;
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  background-color: #ebeff5;
`;

const InputSpan = styled.div`
  font-size: 15px;
  margin: 4px 4px;
  color: rgba(44, 50, 61, 0.6);
`;

const TextInput = styled.input`
  border: none;
  outline: none;
  width: 230px;
  font-size: 15px;
  border-radius: 4px;
  margin: 6px 12px;
  background-color: #ebeff5;
`;

const Bottom = styled.div`
  margin-top: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
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
