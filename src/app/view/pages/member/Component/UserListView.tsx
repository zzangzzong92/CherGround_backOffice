import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TableUserList from "./TableUserList";
import Modal from "app/view/component/Modal";
import UserListDropDown from "./UserListDropDown";

function UserListView({ users, setUsers }: any) {
  const [selected, setSelected] = useState<string>("이름순 보기");
  // const [searchData, setSearchData] = useState<Array<string>>([]);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [sort, setSort] = useState<string>("name");

  //모달 모음
  const [openGroupAddDelete, setOpenGroupAddDelete] = useState<boolean>(false);
  const [openGroupInfoEdit, setOpenGroupInfoEdit] = useState<boolean>(false);
  const [openGroupDelete, setOpenGroupDelete] = useState<boolean>(false);
  const [addMemberInput, setAddMemberInput] = useState<string>("");
  const getAddButtonColorChange = addMemberInput.length >= 2;

  //페이지네이션
  const [paginationArray, setPaginationArray] = useState<number[]>([]); //페이지 숫자
  const [page, setPage] = useState<number>(1);
  const [userPerPage, setUserPerPage] = useState<number[]>([]);

  //멤버 filter
  useEffect(() => {
    //전체구성원 조회
    fetch(`http://localhost:8080/user?sort=${sort}&page=${page}&amount=15`, {
      method: "GET",
      headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    })
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        fetch(`http://localhost:8080/user/count`, {
          method: "GET",
          headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
        })
          .then((secondRes) => secondRes.json())
          .then((usersCountData) => {
            users.forEach((user: any) => {
              let count = 0;
              user.members.forEach((member: any) => {
                if (member.isLeader) {
                  count++;
                }
              });
              if (count) {
                user.isLeader = true;
              }
            });

            setUsersCount(usersCountData);

            const paginationUserCountArray = [];
            for (let i = 0; i < Math.ceil((usersCountData - 1) / 15); i++) {
              paginationUserCountArray.push(i + 1); //유저수가 15명이면 딱 1로 떨어지나 +1을 하면 의미없는 2가 생성됨
            }

            setPaginationArray(paginationUserCountArray);
            setUserPerPage(usersCountData);
            setUsers(users);
          });
      });
  }, [sort]);

  const loadPaginationContent = (pageNumber: number) => {
    fetch(
      `http://localhost:8080/user?sort=${sort}&page=${pageNumber}&amount=15`,
      {
        method: "get",
        headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setUsers(result);
        setPage(pageNumber);
      });
  };

  //1. 조회 api에서 page query parameter에 현재 페이지 숫자를 넣어서 fetch
  //2. setUsers에 넣어줌

  // const addMember = () => {
  //   fetch(`http://localhost:8080/group/${params.id}/member`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: `Bearer ${sessionStorage.getItem("ID")}`,
  //       mode: "cors",
  //     },
  //     body: JSON.stringify({
  //       memberId: addMemberInput,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => setUsers(result))
  //     .then(() => setIsOpenAddMemberModal(false));
  // };

  // const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const [openSearchDrop, setOpenSearchDrop] = useState<boolean>(false);
  //   const [search, setSearch] = useState<string>("");
  //   e.preventDefault();
  //   setAddMemberInput(e.target.value);
  //   setSearch(e.target.value);
  // };

  return (
    <MemberListViewContainer>
      <Header>
        <HeaderLeft>
          <SelectedPart>CherGround 구성원</SelectedPart>
          <MemberNumber>
            <Member>{usersCount + "명"}</Member>
          </MemberNumber>
          {openGroupAddDelete && (
            <GroupInfoEdit>
              <EditContent>
                <ContentSpan
                  onClick={() => {
                    setOpenGroupInfoEdit(!openGroupInfoEdit);
                    setOpenGroupAddDelete(false);
                  }}
                >
                  정보 수정
                </ContentSpan>
                {openGroupInfoEdit && (
                  <Modal width="398px" height="218px" margin="0 0 0 0">
                    <GroupInfoEditContainer>
                      <GroupInfoEditTitle>그룹 정보 수정</GroupInfoEditTitle>
                      <GroupInfoEditInputBox>
                        <InputBoxName>그룹 이름</InputBoxName>
                        <GroupInfoEditInput
                          type="text"
                          placeholder="수정할 그룹 이름을 입력하세요."
                        ></GroupInfoEditInput>
                      </GroupInfoEditInputBox>
                      <ButtonWrapper>
                        <AddMemberColseButton
                          onClick={() => {
                            setOpenGroupInfoEdit(false);
                          }}
                        >
                          <Close>취소</Close>
                        </AddMemberColseButton>
                        <AddMemberAddButton
                          style={{
                            backgroundColor: getAddButtonColorChange
                              ? "#333840"
                              : "rgba(70, 77, 90, 0.12)",
                          }}
                        >
                          <Add
                            style={{
                              color: getAddButtonColorChange
                                ? "#FFFFFF"
                                : "rgba(70, 77, 90, 0.26)",
                            }}
                          >
                            수정
                          </Add>
                        </AddMemberAddButton>
                      </ButtonWrapper>
                    </GroupInfoEditContainer>
                  </Modal>
                )}
              </EditContent>
              <EditContent
                onClick={() => {
                  setOpenGroupDelete(!openGroupDelete);
                }}
              >
                <ContentSpan>그룹 삭제</ContentSpan>
                {openGroupDelete && (
                  <Modal width="398px" height="218px" margin="0 0 0 0">
                    <GroupDeleteContainer>
                      <GroupDeleteTitle>그룹 삭제</GroupDeleteTitle>
                      <GroupDeleteWarning>
                        그룹 삭제 시 해당 그룹은 더 이상 메뉴에 나타나지
                        않습니다. [{users.name}]을 삭제 하시겠습니까?
                      </GroupDeleteWarning>
                      <ButtonWrapper>
                        <AddMemberColseButton
                          onClick={() => {
                            setOpenGroupDelete(false);
                          }}
                        >
                          <Close>취소</Close>
                        </AddMemberColseButton>
                        <AddMemberAddButton>
                          <Add>삭제</Add>
                        </AddMemberAddButton>
                      </ButtonWrapper>
                    </GroupDeleteContainer>
                  </Modal>
                )}
              </EditContent>
            </GroupInfoEdit>
          )}
        </HeaderLeft>
        <HeaderRight>
          <Arrcordian>
            <UserListDropDown
              selected={selected}
              setSelected={setSelected}
              setSort={setSort}
            />
          </Arrcordian>
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
      {users &&
        users.map((user: any) => {
          return (
            <TableUserList key={user.id} user={user} setUsers={setUsers} />
          );
        })}
      <PaginationButtonSection>
        <PaginationButtonWrapper>
          {paginationArray &&
            paginationArray.map((pageNumber: number) => (
              <PaginationButton
                key={pageNumber}
                onClick={() => loadPaginationContent(pageNumber)}
              >
                {pageNumber}
              </PaginationButton>
            ))}
        </PaginationButtonWrapper>
      </PaginationButtonSection>
    </MemberListViewContainer>
  );
}

export default UserListView;

const MemberListViewContainer = styled.div`
  margin-left: 24px;
  user-select: none;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedPart = styled.div`
  font-size: 24px;
  font-weight: 700;
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
  width: auto;
  height: 24px;
  position: absolute;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.15px;
  padding-top: 8px;
  margin: 0 8px 3px 8px;
  color: #6b7382;
`;

// *** 버튼(그룹 정보수정, 삭제)
const GroupInfoEdit = styled.div`
  width: 96px;
  height: 72px;
  display: flex;
  position: absolute;
  top: 121px;
  left: 580px;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.08),
    0px 8px 10px 1px rgba(0, 0, 0, 0.04), 0px 3px 14px 2px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
`;

const EditContent = styled.div`
  width: 96px;
  height: 36px;

  :hover {
    background-color: rgba(74, 110, 177, 0.08);
  }
`;

const ContentSpan = styled.div`
  width: 64px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin: 5px auto;
  color: rgba(44, 50, 61, 0.87);
`;

const HeaderLeft = styled.div`
  display: flex;
`;

const HeaderRight = styled.div`
  display: flex;
`;

//sort드롭다운
const Arrcordian = styled.div`
  display: flex;
`;

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

const AddMemberAddButton = styled.div`
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

//그룹 수정 모달
const GroupInfoEditContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GroupInfoEditTitle = styled.div`
  width: 350px;
  height: 32px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
  margin: 16px 24px 0 24px;
`;

const GroupInfoEditInputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 56px;
  background: #ebeff5;
  border-radius: 4px;
  margin: 16px 24px 0 24px;
`;

const InputBoxName = styled.div`
  width: 49px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  align-items: center;
  letter-spacing: 0.4px;
  color: rgba(44, 50, 61, 0.6);
  margin: 4px 12px;
`;

const GroupInfoEditInput = styled.input`
  width: 326px;
  height: 24px;
  outline: none;
  border: none;
  margin: 0 12px;
  color: rgba(44, 50, 61, 0.87);
  background: #ebeff5;
`;

//그룹 삭제 모달
const GroupDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GroupDeleteTitle = styled.div`
  width: 350px;
  height: 32px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
  margin: 16px 24px 0 24px;
`;

const GroupDeleteWarning = styled.div`
  width: 350px;
  height: 48px;
  border-radius: 4px;
  margin: 16px 24px 0 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const PaginationButtonSection = styled.div`
  position: fixed;
  width: 1140px;
  height: 96px;
`;

const PaginationButtonWrapper = styled.div`
  width: 420px;
  height: 40px;
  margin: 28px 0 0 360px;
`;

const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  outline: none;
  background: none;
  cursor: pointer;

  :hover {
    background: rgba(70, 77, 90, 0.12);
  }
`;
