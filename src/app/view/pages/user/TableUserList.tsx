import React from "react";
import styled from "styled-components";
import StarIcon from "../../assets/images/StarIcon.svg";

function TableUserList({ user }: any) {
  return (
    <TableListContainer>
      <MemberListInfo>
        <Member>
          <MemberImg>{user.name && user.name.slice(1)}</MemberImg>
          <MemberName>{user.name}</MemberName>
          {user.isLeader && (
            <IconBox>
              <StarIcon />
            </IconBox>
          )}
        </Member>
        <Member>{user.position ? user.position : "직책없음"}</Member>
        <Member>{user.job ? user.job : "직무없음"}</Member>
        <Member>
          {user.members &&
            user.members.map((group: any) => {
              return (
                <Group key={group.id}>
                  {group.group.name ? group.group.name : "그룹없음"}
                </Group>
              );
            })}
        </Member>
        <Member>{user.phoneNumber}</Member>
        <Member>{user.email}</Member>
      </MemberListInfo>
    </TableListContainer>
  );
}

const TableListContainer = styled.div`
  border-top: 1px solid rgba(51, 56, 64, 0.12);
  height: 52px;
  align-content: center;
`;

const MemberImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 64px;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.15px;
  color: #f3f5f9;
  background-color: #8e99ab;
`;

const MemberName = styled.div`
  width: auto;
  height: 20px;
  margin-left: 20px;
`;

const IconBox = styled.div`
  width: 14px;
  height: 13px;
`;

const MemberListInfo = styled.div`
  display: flex;
`;

const Member = styled.div`
  height: 36px;
  background-color: #ebeff5;
  text-decoration: none;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.1px;
  margin-top: 8px;
  background-color: #ffffff;
  /* border: 1px solid black; */
  color: rgba(44, 50, 61, 0.87);
  text-align: center;

  :first-child {
    display: flex;
    width: 160px;
  }
  :nth-child(2) {
    width: 200px;
  }
  :nth-child(3) {
    width: 120px;
  }
  :nth-child(4) {
    height: 20px;
    display: flex;
    margin-top: 15px;
    width: 180px;
  }
  :nth-child(5) {
    width: 180px;
  }
  :nth-child(6) {
    width: 250px;
  }
`;

const Group = styled.div`
  /* display: flex; */
  width: fit-content;
  height: fit-content;
  background-color: #ebeff5;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: rgba(44, 50, 61, 0.87);
  margin: 0 auto;
`;

export default TableUserList;
