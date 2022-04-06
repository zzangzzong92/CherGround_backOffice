import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import TableContent from "./TableContent";
import MemberAddModal from "./MemberAddModal";

function MemberListView() {
  const [memberList, setMemberList] = useState([]);
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const [isOpenAddMemberModal, setIsOpenAddMemberModal] =
    useState<boolean>(false);
  const [addMember, setAddMember] = useState<boolean>(false);

  // const SearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

  // };

  useEffect(() => {
    fetch("http://localhost:3000/public/data/MemberList.json", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMemberList(data);
      });
  }, []);

  const openAddMember = useCallback(() => {
    setAddMember(!addMember);
  }, []);

  return (
    <MemberListViewContainer>
      <Header>
        <HeaderLeft>
          <SelectedPart>CherGround 구성원</SelectedPart>
          <MemberNumber>
            <Member>37명</Member>
          </MemberNumber>
        </HeaderLeft>
        <HeaderRight>
          <Arrcordian>
            {/* <DropDown>

          </DropDown> */}
          </Arrcordian>
          <AddMemberButton
            onClick={() => {
              console.log(1);
              setIsOpenAddMemberModal(!isOpenAddMemberModal);
            }}
          >
            <AddMemberSpan>구성원 추가</AddMemberSpan>
            {isOpenAddMemberModal && (
              <MemberAddModal
                // onClickToggleModal={openAddMember}
                width="398px"
                height="258px"
                margin="-400px 100px 50px -700px"
              >
                <AddMemberContainer>
                  <AddMemberTitle>구성원 추가</AddMemberTitle>
                  <AddMemberExplain>
                    쉐어그라운드 구성원을 [그룹이름]에 추가합니다.
                  </AddMemberExplain>
                  <CheckName>
                    <CheckNameSpan>이름</CheckNameSpan>
                    <CheckNameText
                      // onChange={SearchHandler}
                      type="text"
                      placeholder="구성원의 이름을 입력해주세요."
                    ></CheckNameText>
                  </CheckName>
                  <ButtonWrapper>
                    <AddMemberColseButton
                      onClick={() => {
                        setIsOpenAddMemberModal(false);
                      }}
                    >
                      <Close>취소</Close>
                    </AddMemberColseButton>
                    <AddMemberAddButton>
                      <Add>추가</Add>
                    </AddMemberAddButton>
                  </ButtonWrapper>
                </AddMemberContainer>
              </MemberAddModal>
            )}
          </AddMemberButton>
        </HeaderRight>
      </Header>
      <MemberListTable>
        <TableTitle>
          <TitleContent>이름</TitleContent>
          <TitleContent>직책</TitleContent>
          <TitleContent>직무</TitleContent>
          <TitleContent>소속 그룹</TitleContent>
          <TitleContent>휴대폰 번호</TitleContent>
          <TitleContent>메일주소</TitleContent>
        </TableTitle>
      </MemberListTable>
      {memberList &&
        memberList.map((memberList: any) => {
          return (
            <TableContent
              key={memberList.id}
              name={memberList.name}
              position={memberList.position}
              job={memberList.job}
              group={memberList.group}
              phone={memberList.phone}
              email={memberList.email}
            />
          );
        })}
    </MemberListViewContainer>
  );
}

export default MemberListView;

const MemberListViewContainer = styled.div`
  margin-left: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedPart = styled.div`
  font-size: 24px;
  line-height: 32px;
  align-items: center;
  color: rgba(44, 50, 61, 0.87);
`;

const MemberNumber = styled.div`
  width: 49px;
  height: 30px;
  border-radius: 16px;
  margin-left: 8px;
  background-color: #ebeff5;
`;

const Member = styled.span`
  position: static;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin: 10px 8px 3px 8px;
  color: #6b7382;
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderRight = styled.div`
  display: flex;
  width: 154px;
  height: 36px;
`;

const Arrcordian = styled.div``;

const MemberListTable = styled.div`
  margin-top: 29px;
`;

const TableTitle = styled.div`
  display: flex;
`;

const TitleContent = styled.div`
  height: 36px;
  background-color: #ebeff5;
  text-decoration: none;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 0.1px;
  border: 1px solid red;
  color: rgba(44, 50, 61, 0.87);
  text-align: center;

  :first-child {
    width: 160px;
  }
  :nth-child(2) {
    width: 200px;
  }
  :nth-child(3) {
    width: 120px;
  }
  :nth-child(4) {
    width: 180px;
  }
  :nth-child(5) {
    width: 180px;
  }
  :nth-child(6) {
    width: 250px;
  }
`;

//구성원 추가 모달
const AddMemberButton = styled.div`
  width: 120px;
  height: 42px;
  border-radius: 4px;
  margin-left: 16px;
  background-color: #333840;
  cursor: pointer;
`;

const AddMemberSpan = styled.div`
  width: 75px;
  height: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin: 8px auto;
  letter-spacing: 0.46px;
  color: #ffffff;
`;

const AddMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const AddMemberTitle = styled.div`
  width: 350px;
  height: 32px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15px;
  margin: 0px 24px 16px 24px;
  color: rgba(44, 50, 61, 0.87);
`;

const AddMemberExplain = styled.div`
  width: 350px;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.15px;
  margin: 0px 24px 16px 24px;
  color: rgba(44, 50, 61, 0.87);
`;

const CheckName = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 56px;
  border-radius: 4px;
  margin: 0px 24px;
  background-color: #ebeff5;
`;

const CheckNameSpan = styled.div`
  margin: 8px 0 0 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  align-items: center;
  color: rgba(44, 50, 61, 0.6);
`;

const CheckNameText = styled.input`
  outline: none;
  border: none;
  margin-left: 10px;
  background-color: #ebeff5;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 398px;
  height: 98px;
`;

const AddMemberColseButton = styled.div`
  width: 120px;
  height: 42px;
  margin: 32px 12px 24px 122px;
  background-color: #ffffff;
  border: 1px solid #333840;
  border-radius: 4px;
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

const AddMemberAddButton = styled.div`
  width: 120px;
  height: 42px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin: 32px 24px 24px 0px;
  background-color: rgba(70, 77, 90, 0.12);
  border-radius: 4px;
`;

const Add = styled.div`
  width: 29px;
  height: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  color: rgba(70, 77, 90, 0.26);
  text-align: center;
  margin: 10px auto;
`;
