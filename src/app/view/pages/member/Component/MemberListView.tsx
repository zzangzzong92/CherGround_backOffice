import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TableMemberList from "./TableMemberList";
import MemberAddModal from "./MemberAddModal";
import DropDown from "app/view/pages/member/Component/DropDown";
import DotDotDot from "../../../assets/images/DotDotDot.svg";
import SearchNameDrop from "app/view/component/SearchNameDrop";
import Modal from "app/view/component/Modal";

function MemberListView({
  groupList,
  setGroupList,
  groupId,
  group,
  setGroup,
}: any) {
  const [selected, setSelected] = useState<string>("직책순 보기");
  const [searchData] = useState<Array<string>>([]);
  const [search, setSearch] = useState<string>("");

  //모달 모음
  const [isOpenAddMemberModal, setIsOpenAddMemberModal] =
    useState<boolean>(false);
  const [openGroupAddDelete, setOpenGroupAddDelete] = useState<boolean>(false);
  const [openSearchNamePartDrop] = useState<boolean>(false);
  const [openGroupInfoEdit, setOpenGroupInfoEdit] = useState<boolean>(false);
  const [openGroupDelete, setOpenGroupDelete] = useState<boolean>(false);
  const [addMemberInput, setAddMemberInput] = useState<string>("");
  const getAddButtonColorChange = addMemberInput.length >= 2;
  const [editGroupInput, setEditGroupInput] = useState<string>("");
  const getEditGroupInput = editGroupInput.length >= 2;

  // http://localhost:8080/group/${groupId}/member/count = 멤버 인원 수 (그룹)
  //멤버 filter
  useEffect(() => {
    fetch(
      `http://localhost:8080/group/${groupId}/member?sort=name&page=1&amount=15`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setGroup(data);
      });
  }, [groupId]);

  const DeleteGroup = () => {
    fetch(`http://localhost:8080/group/${groupId}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("ID")}`,
        mode: "cors",
      },
    }).then(() => {
      fetch(`http://localhost:8080/group`, {
        //삭제 후 조회를 위한 fetch
        method: "get",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ID")}`,
          mode: "cors",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          setGroupList(result);
        });
    });
  };

  const editGroupName = () => {
    fetch(`http://localhost:8080/group/${groupId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("ID")}`,
        mode: "cors",
      },
      body: JSON.stringify({
        name: editGroupInput,
      }),
    }).then(() =>
      fetch(`http://localhost:8080/group`, {
        //삭제 후 조회를 위한 fetch
        method: "get",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("ID")}`,
          mode: "cors",
        },
      }).then((result) => setGroupList(result))
    );
    setOpenGroupInfoEdit(false);
  };

  const groupNameEditInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEditGroupInput(e.target.value);
  };

  const addMember = () => {
    fetch(`http://localhost:8080/group/${group.members.id}/member`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("ID")}`,
        mode: "cors",
      },
      body: JSON.stringify({
        memberId: group.members.id,
      }),
    })
      .then((res) => res.json())
      .then((result) => setGroup(result))
      .then(() => setIsOpenAddMemberModal(false));
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [openSearchDrop, setOpenSearchDrop] = useState<boolean>(false);

    e.preventDefault();
    setAddMemberInput(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <MemberListViewContainer>
      <Header>
        <HeaderLeft>
          <SelectedPart>{group.name + "     구성원"}</SelectedPart>
          <MemberNumber>
            <Member>
              {group.members &&
                (group.members.length
                  ? group.members.length + "명"
                  : group.members.length === 0
                  ? "0명"
                  : "")}
            </Member>
          </MemberNumber>
          {group && (
            <GroupAddDelete
              onClick={() => setOpenGroupAddDelete(!openGroupAddDelete)}
            >
              <DotDotDot />
            </GroupAddDelete>
          )}
          {openGroupAddDelete && (
            <GroupInfoEdit>
              <EditContent>
                <ContentSpan
                  onClick={() => {
                    setOpenGroupInfoEdit(!openGroupInfoEdit);
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
                          defaultValue={editGroupInput}
                          onChange={groupNameEditInputHandler}
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
                          onChange={editGroupName}
                          style={{
                            background: getEditGroupInput
                              ? "#333840"
                              : "rgba(70, 77, 90, 0.12)",
                          }}
                        >
                          <Add
                            onClick={editGroupName}
                            style={{
                              color: getEditGroupInput
                                ? "#ffffff"
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
                        않습니다. [{group.name}]을 삭제 하시겠습니까?
                      </GroupDeleteWarning>
                      <ButtonWrapper>
                        <AddMemberColseButton
                          onClick={() => {
                            setOpenGroupDelete(false);
                          }}
                        >
                          <Close>취소</Close>
                        </AddMemberColseButton>
                        <DeleteGroupButton onClick={DeleteGroup}>
                          <DeleteGroupSpan>삭제</DeleteGroupSpan>
                        </DeleteGroupButton>
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
            <DropDown
              selected={selected}
              setSelected={setSelected}
              group={group}
              setGroup={setGroup}
              groupList={groupList}
              groupId={groupId}
            />
          </Arrcordian>
          {group && (
            <AddMemberButton>
              <AddMemberSpan
                onClick={() => {
                  setIsOpenAddMemberModal(!isOpenAddMemberModal);
                }}
              >
                구성원 추가
              </AddMemberSpan>
              {isOpenAddMemberModal && (
                <MemberAddModal
                  width="398px"
                  height="258px"
                  margin="-400px 100px 50px -700px"
                >
                  <AddMemberContainer>
                    <AddMemberTitle>구성원 추가</AddMemberTitle>
                    <AddMemberExplain>
                      쉐어그라운드 구성원을 [{group.name}]에 추가합니다.
                    </AddMemberExplain>
                    <CheckName>
                      <CheckNameSpan>이름</CheckNameSpan>
                      <CheckNameText
                        // onChange={SearchHandler}
                        type="text"
                        placeholder="구성원의 이름을 입력해주세요."
                        onChange={onChangeSearch}
                        value={search}
                      ></CheckNameText>
                    </CheckName>
                    <SearchDropDown>
                      {openSearchNamePartDrop && (
                        <NameContainer>
                          {searchData &&
                            searchData.map((searchNameGroup: any) => {
                              if (searchData)
                                return (
                                  <SearchNameDrop
                                    key={searchNameGroup.id}
                                    searchNamePart={searchNameGroup}
                                    setGroup={setGroup}
                                  />
                                );
                            })}
                        </NameContainer>
                      )}
                    </SearchDropDown>
                    {/* <MappingNameList>
                      {openAddMemberInputDrop && (
                        <NameContainer>{searchData}</NameContainer>
                      )}
                    </MappingNameList> */}
                    <ButtonWrapper>
                      <AddMemberColseButton
                        onClick={() => {
                          setIsOpenAddMemberModal(false);
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
                          onClick={addMember}
                        >
                          추가
                        </Add>
                      </AddMemberAddButton>
                    </ButtonWrapper>
                  </AddMemberContainer>
                </MemberAddModal>
              )}
            </AddMemberButton>
          )}
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
          {group && <TitleContent></TitleContent>}
        </TableTitle>
      </MemberListTable>
      {group.members &&
        group.members.map((member: any) => {
          return (
            <TableMemberList
              key={member.id}
              member={member}
              setGroup={setGroup}
            />
          );
        })}
      <PaginationButtonSection>
        <PaginationButtonWrapper>
          <PaginationButton>1</PaginationButton>
        </PaginationButtonWrapper>
      </PaginationButtonSection>
    </MemberListViewContainer>
  );
}

export default MemberListView;

const MemberListViewContainer = styled.div`
  margin-left: 24px;
  user-select: none;
  display: flex;
  flex-direction: column;
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

const GroupAddDelete = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin: 3px 0 0 8px;
  text-align: center;
  position: relative;

  :hover {
    background-color: rgba(142, 153, 171, 0.08);
  }
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
  :nth-child(7) {
    width: 60px;
  }
`;

//구성원 추가 모달
const AddMemberButton = styled.div`
  width: 120px;
  height: 36px;
  border-radius: 4px;
  margin-left: 16px;
  background-color: #333840;
  cursor: pointer;
`;

const AddMemberSpan = styled.div`
  width: 120px;
  height: 36px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin: 8px 20px 4px 20px;
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

const SearchDropDown = styled.div``;

const NameContainer = styled.div`
  position: absolute;
  left: 0px;
  top: 41px;
  display: block;
  width: 260px;
  height: 180px;
  overflow: scroll;
  background-color: #ffffff;
  z-index: 1;
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

const DeleteGroupButton = styled.div`
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

const DeleteGroupSpan = styled.div`
  width: 29px;
  height: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  margin: 10px auto;
`;

const PaginationButtonSection = styled.div`
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
