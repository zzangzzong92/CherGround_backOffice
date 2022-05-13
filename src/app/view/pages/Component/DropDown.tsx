import React, { useState } from "react";
import styled from "styled-components";
import ArrowUp from "../../assets/images/ArrowUp.svg";
import ArrowDown from "../../assets/images/ArrowDown.svg";
import DropDownApi from "data/api/member/DropDownApi";

const DropDown = ({ selected, setSelected, setMemberList, groupId }: any) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const options = ["직책순 보기", "직무순 보기", "이름순 보기"];
  let sort: string;

  const clickSort = (index: number) => {
    switch (index) {
      case 0:
        sort = "position";
        break;
      case 1:
        sort = "job";
        break;
      case 2:
        sort = "name";
        break;
      default:
    }
    new DropDownApi().getSort(groupId, sort).then((users) => {
      setMemberList(users);
    });
  };

  return (
    <DropDownContainer
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <DropDownWrapper>
        <DropDownTitle>
          <DropDownDefault>{selected}</DropDownDefault>
        </DropDownTitle>
        <ArrowIcon>
          <IconBox>{isActive ? <ArrowUp /> : <ArrowDown />}</IconBox>
        </ArrowIcon>
      </DropDownWrapper>
      {isActive && (
        <DropDownContent>
          {options &&
            options.map((option, index) => (
              <Content
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsActive(false);
                  clickSort(index);
                }}
              >
                {option}
              </Content>
            ))}
        </DropDownContent>
      )}
    </DropDownContainer>
  );
};

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
  width: 154px;
  height: 36px;
  border-radius: 4px;
  background-color: #ebeff5;
  cursor: pointer;
`;

const DropDownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DropDownTitle = styled.div``;

const DropDownDefault = styled.div`
  width: 70px;
  height: 24px;
  color: #8e99ab;
  margin: 6px 16px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const ArrowIcon = styled.div`
  width: 52px;
  height: 36px;
  border-left: 1px solid rgba(142, 153, 171, 0.5); ;
`;

const IconBox = styled.div`
  width: 9px;
  height: 5px;
  margin: 6px auto;
`;

const DropDownContent = styled.div`
  width: 154px;
  height: 108px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.08),
    0px 8px 10px 1px rgba(0, 0, 0, 0.04), 0px 3px 14px 2px rgba(0, 0, 0, 0.02);
  z-index: 1;
`;

const Content = styled.div`
  width: 154px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.15px;
  cursor: pointer;

  :nth-child(2) {
    background-color: rgba(74, 110, 177, 0.08);
  }
`;

export default DropDown;
