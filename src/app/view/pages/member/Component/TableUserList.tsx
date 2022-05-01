import React, { useState } from "react";
import styled from "styled-components";
import StarIcon from "../../../assets/images/StarIcon.svg";

function TableUserList({ user, setGroup }: any) {
  console.log(user);

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
        <Member>{user.position}</Member>
        <Member>{user.job}</Member>
        <Member>
          {user.group &&
            user.group.map((group: any) => {
              return <Group>{group.group.name}</Group>;
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
  width: 39px;
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

//프로필 수정, 구성원 삭제 Div
const ProfileDiv = styled.div`
  width: 110px;
  height: 72px;
  display: flex;
  flex-direction: column;
`;

const EditProfile = styled.div`
  width: 110px;
  height: 36px;
`;

const EditProfileSpan = styled.div`
  width: 110px;
  height: 36px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(44, 50, 61, 0.87);
`;

const DeleteMember = styled.div`
  width: 110px;
  height: 36px;
  background: rgba(74, 110, 177, 0.08);
`;

const DeleteMemberSpan = styled.div`
  width: 110px;
  height: 36px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin: 5px auto;
  color: rgba(44, 50, 61, 0.87);
`;

//프로필 수정 모달
const EditProfileContainer = styled.div``;

const EditProfileTitle = styled.div`
  width: 351px;
  height: 32px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.15px;
  margin-left: 24px;
  color: rgba(44, 50, 61, 0.87);
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 24px;
  border-radius: 64px;
  background-color: #8e99ab;
`;

const ProfileImgInputWrapper = styled.div`
  width: 350px;
  height: 55px;
  display: flex;
  background-color: #ebeff5;
  border-radius: 4px;
  margin: 16px 0 0 24px;
`;

const NoneProfileImgSpan = styled.div`
  margin-left: 15px;
  color: #f3f5f9;
  font-size: 16px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: 0.15px;
`;

const FileUrl = styled.div`
  width: 150px;
  height: 24px;
  margin-top: 18px;
`;

const RemoveFileIconBox = styled.div`
  width: 24px;
  height: 24px;
  margin: 18px 0 0 150px;
`;

const FileUploadIconBox = styled.div`
  width: 24px;
  height: 24px;
  margin: 18px 0 0 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 398px;
  height: 98px;
`;

const EditProfileColseButton = styled.div`
  width: 120px;
  height: 42px;
  margin: 32px 12px 24px 122px;
  background-color: #ffffff;
  border: 1px solid #333840;
  border-radius: 4px;
  cursor: pointer;
`;

const Close = styled.div`
  width: 29px;
  height: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  color: #333840;
  text-align: center;
  margin: 10px auto;
`;

const EditProfileAddButton = styled.div`
  width: 120px;
  height: 42px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin: 32px 24px 24px 0px;
  background-color: rgba(70, 77, 90, 0.12);
  border-radius: 4px;
  cursor: pointer;
`;

const Add = styled.div`
  width: 29px;
  height: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  margin: 10px auto;
`;

//구성원 삭제 모달
const DeleteMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteMemberTitle = styled.div`
  width: 351px;
  height: 32px;
  margin: 0 24px 0 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const DeleteMemberWarning = styled.div`
  width: 351px;
  height: 24px;
  margin: 24px 0 10px 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const DeleteMemberColseButton = styled.div`
  width: 120px;
  height: 42px;
  margin: 32px 12px 24px 122px;
  background-color: #ffffff;
  border: 1px solid #333840;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteMemberButton = styled.div`
  width: 120px;
  height: 42px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin: 32px 24px 24px 0px;
  background-color: rgba(70, 77, 90, 0.12);
  border-radius: 4px;
  cursor: pointer;
`;
export default TableUserList;
