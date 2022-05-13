import React from "react";
import styled from "styled-components";

export default function GroupAddMember({ group }: any) {
  return (
    <NamePosiotionWrapper
    // onClick={group === "user" ? selectUser : selectGroup}
    >
      <MemberName>
        <NameSpan>{group.name}</NameSpan>
      </MemberName>
      <MemberPart>
        <PositionSpan>{group.position}</PositionSpan>
      </MemberPart>
    </NamePosiotionWrapper>
  );
}

const NamePosiotionWrapper = styled.div`
  /* position: absolute; */
  width: 260px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  cursor: pointer;

  :hover {
    background-color: rgba(74, 110, 177, 0.08);
  }
  /* justify-content: space-between; */
`;

const MemberName = styled.div`
  width: 100px;
  height: 24px;
`;

const NameSpan = styled.div`
  width: 120px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin: 6px 16px;
  color: rgba(44, 50, 61, 0.87);
`;

const MemberPart = styled.div`
  width: 50px;
  height: 24px;
`;

const PositionSpan = styled.div`
  width: 50px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.4px;
  margin-top: 8px;
  color: rgba(44, 50, 61, 0.6);
`;
