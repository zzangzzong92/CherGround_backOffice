import React from "react";
import styled from "styled-components";

export default function AddSearchMemberName({
  userName,
  setUserId,
  setAddMemberModalInput,
  setOpenAddMemberSearch,
}: any) {
  const selectMember = () => {
    setAddMemberModalInput(userName.name);
    setOpenAddMemberSearch(false);
    setUserId(userName.id);
  };

  return (
    <AddSearchMemberNameContainer onClick={selectMember}>
      <MemberNameDiv>
        <MemberNameSpan>{userName.name}</MemberNameSpan>
      </MemberNameDiv>
      <MemberGroupDiv>
        <MemberGroupSpan>{userName.position}</MemberGroupSpan>
      </MemberGroupDiv>
    </AddSearchMemberNameContainer>
  );
}

const AddSearchMemberNameContainer = styled.div`
  width: 345px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  :hover {
    background-color: rgba(74, 110, 177, 0.08);
  }
`;

const MemberNameDiv = styled.div`
  width: 100px;
  height: 36px;
`;

const MemberNameSpan = styled.div`
  width: 120px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin: 6px 16px;
  color: rgba(44, 50, 61, 0.87);
`;

const MemberGroupDiv = styled.div`
  width: 50px;
  height: 24px;
`;

const MemberGroupSpan = styled.div`
  width: 50px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.4px;
  margin-top: 8px;
  color: rgba(44, 50, 61, 0.6);
`;
