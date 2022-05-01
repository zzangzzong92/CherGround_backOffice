import React, { useState } from "react";
import styled from "styled-components";
import StarIcon from "../../../assets/images/StarIcon.svg";
import DotDotDot from "../../../assets/images/DotDotDot.svg";
import RemoveFile from "../../../assets/images/RemoveFile.svg";
import FileUpload from "../../../assets/images/FileUpload.svg";
import Modal from "app/view/component/Modal";

function TableMemberList({ member, setGroup, setUsers }: any) {
  const [openProfileDiv, setOpenProfileDiv] = useState<boolean>(false);
  const [openProfileEditModal, setOpenProfileEditModal] =
    useState<boolean>(false);
  const [openDeleteMemberModal, setOpenDeleteMemberModal] =
    useState<boolean>(false);
  const [profileImg, setProfileImg] = useState<string>("");

  const profileImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file: File = e.target.files[0];
      setProfileImg(URL.createObjectURL(file));
    }
  };

  console.log(member);

  return (
    <TableListContainer>
      <MemberListInfo>
        <Member>
          <MemberImg>{member.user.name && member.user.name.slice(1)}</MemberImg>
          <MemberName>{member.user.name}</MemberName>
          {member.isLeader === true && (
            <IconBox>
              <StarIcon />
            </IconBox>
          )}
        </Member>
        <Member>{member.user.position}</Member>
        <Member>{member.user.job}</Member>
        <Member>
          {member.group &&
            member.group.map((group: any) => {
              return <Group>{group.name}</Group>;
            })}
        </Member>
        <Member>{member.user.phoneNumber}</Member>
        <Member>{member.user.email}</Member>
        <Member onClick={() => setOpenProfileDiv(!openProfileDiv)}>
          <DotDotDot />
        </Member>

        {openProfileDiv && (
          <ProfileDiv>
            <EditProfile>
              <EditProfileSpan
                onClick={() => setOpenProfileEditModal(!openProfileEditModal)}
              >
                프로필 수정
              </EditProfileSpan>
              {openProfileEditModal && (
                <Modal width="398px" height="293px" margin="0 0 700px -800px">
                  <EditProfileContainer>
                    <EditProfileTitle>프로필 수정</EditProfileTitle>
                    <ProfileImg>
                      {profileImg ? (
                        { profileImg }
                      ) : (
                        <NoneProfileImgSpan>
                          {member.user.name.slice(1)}
                        </NoneProfileImgSpan>
                      )}
                    </ProfileImg>
                    <ProfileImgInputWrapper>
                      <FileUrl>{}</FileUrl>
                      {profileImg && (
                        <RemoveFileIconBox>
                          <RemoveFile />
                        </RemoveFileIconBox>
                      )}
                      <FileUploadIconBox>
                        <FileUploadInput
                          type="file"
                          onChange={profileImgHandler}
                        ></FileUploadInput>
                        <FileUpload />
                      </FileUploadIconBox>
                    </ProfileImgInputWrapper>
                    <ButtonWrapper>
                      <EditProfileColseButton
                        onClick={() => {
                          setOpenProfileEditModal(false);
                        }}
                      >
                        <Close>취소</Close>
                      </EditProfileColseButton>
                      <EditProfileAddButton>
                        <Add>확인</Add>
                      </EditProfileAddButton>
                    </ButtonWrapper>
                  </EditProfileContainer>
                </Modal>
              )}
            </EditProfile>
            <DeleteMember>
              <DeleteMemberSpan
                onClick={() => {
                  setOpenDeleteMemberModal(!openDeleteMemberModal);
                }}
              >
                구성원 삭제
              </DeleteMemberSpan>
              {openDeleteMemberModal && (
                <Modal width="398px" height="202px" margin="0 0 700px -800px">
                  <DeleteMemberContainer>
                    <DeleteMemberTitle>구성원 삭제</DeleteMemberTitle>
                    <DeleteMemberWarning>
                      {member.user.name} 구성원을 {member.user.group}에서
                      삭제하시겠습니까?
                    </DeleteMemberWarning>
                    <ButtonWrapper>
                      <DeleteMemberColseButton
                        onClick={() => {
                          setOpenDeleteMemberModal(false);
                        }}
                      >
                        <Close>취소</Close>
                      </DeleteMemberColseButton>
                      <DeleteMemberButton>
                        <Delete>삭제</Delete>
                      </DeleteMemberButton>
                    </ButtonWrapper>
                  </DeleteMemberContainer>
                </Modal>
              )}
            </DeleteMember>
          </ProfileDiv>
        )}
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
  :nth-child(7) {
    width: 60px;
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
  position: absolute;
  top: 240px;
  left: 1400px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  z-index: 1;
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
  text-align: center;
  margin-top: 7px;
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
  text-align: center;
  margin-top: 7px;
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

  img {
    width: 60px;
    height: 60px;
  }
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

const FileUploadInput = styled.input``;

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
  background: #333840;
  border-radius: 4px;
  cursor: pointer;
`;

const Delete = styled.div`
  width: 29px;
  height: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  margin: 10px auto;
`;

export default TableMemberList;
