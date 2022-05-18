import React, { useState, useRef } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/images/SearchIcon.svg";
import Plus from "../../assets/images/Plus.svg";
import TribeContent from "./TribeContent";
import SearchNameDrop from "../Component/SearchNameDrop";
import GroupAddModal from "./GroupAddModal";
import { useHistory } from "react-router";
import GroupSelectViewApi from "data/api/member/GorupSelectViewApi";

function GroupSelectView({ setGroupList, groupList, group, setGroup }: any) {
  const [searchData, setSearchData] = useState<string[]>([]);
  const [openGroupAddModal, setOpenGroupAddModal] = useState<boolean>(false);
  const [addGroupNameInput, setAddGroupNameInput] = useState<string>("");
  const [openSearchNamePartDrop, setOpenSearchNamePartDrop] =
    useState<boolean>(false);
  const history = useHistory();
  const selectTriveRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const getAddButtonColorChange = addGroupNameInput.length >= 1;
  const handleAddGroupInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddGroupNameInput(e.target.value);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value) {
      new GroupSelectViewApi()
        .searchMember(e.target.value)
        .then((searchdata: any) => {
          setSearchData(searchdata.data);
        })
        .then(() => {
          setOpenSearchNamePartDrop(true);
        });
    } else {
      setOpenSearchNamePartDrop(false);
    }
  };

  const totalMember = () => {
    new GroupSelectViewApi().getGroupMember().then((total) => {
      setGroup(total.data);
      history.push("/");
    });
  };

  const AddGroup = () => {
    // new GroupSelectViewApi()
    //   .addGroup(addGroupNameInput)
    //   .then((result) => {
    //     setGroupList(result.data);
    //   })

    //   .then(() => setOpenGroupAddModal(false));
    fetch(`http://localhost:8000/group`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        mode: "cors",
        Authorization: `Bearer ${sessionStorage.getItem("ID")}`,
      },
      body: JSON.stringify({
        name: addGroupNameInput,
      }),
    }).then(() => {
      setOpenGroupAddModal(false);
    });
  };

  return (
    <GroupSelectViewContainer>
      <SearchBar>
        <TextInput
          type="text"
          placeholder="파트, 이름 검색"
          onChange={onChangeSearch}
        ></TextInput>
        <SearchDropDown>
          {openSearchNamePartDrop && (
            <NameContainer>
              {searchData &&
                searchData.map((searchNameGroup: any) => {
                  if (searchData)
                    return (
                      <SearchNameDrop
                        key={searchNameGroup.id}
                        searchNameGroup={searchNameGroup}
                        setGroup={setGroup}
                      />
                    );
                })}
            </NameContainer>
          )}
        </SearchDropDown>
        <SearchIconBox>
          <SearchIcon />
        </SearchIconBox>
      </SearchBar>
      <GroupViewer>
        <GroupController>
          <Title onClick={totalMember} ref={selectTriveRef}>
            CherGround
          </Title>
          <AllMember>
            <MemberNumber>
              {groupList.data && groupList.data.totalUserCount}
            </MemberNumber>
          </AllMember>
          <PlusIconBox
            onClick={() => {
              setOpenGroupAddModal(!openGroupAddModal);
            }}
          >
            <Plus />
          </PlusIconBox>
          {openGroupAddModal && (
            <GroupAddModal
              width="398"
              height="218"
              margin="-400px 100px 50px 600px"
            >
              <GroupAddModalContainer>
                <GroupAddTitle>그룹 추가</GroupAddTitle>
                <GroupAddModalInputWrapper>
                  <AddName>그룹 이름</AddName>
                  <AddNameInput
                    type="text"
                    placeholder="추가할 그룹 이름을 입력하세요."
                    onChange={handleAddGroupInput}
                  ></AddNameInput>
                  <ButtonWrapper>
                    <AddGroupCloseButton
                      onClick={() => {
                        setOpenGroupAddModal(false);
                      }}
                    >
                      <Close>취소</Close>
                    </AddGroupCloseButton>
                    <AddGroupAddButton
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
                        onClick={AddGroup}
                      >
                        추가
                      </Add>
                    </AddGroupAddButton>
                  </ButtonWrapper>
                </GroupAddModalInputWrapper>
              </GroupAddModalContainer>
            </GroupAddModal>
          )}
        </GroupController>
        <TribeList>
          <TribeContentWrapper>
            {groupList.data &&
              groupList.data.groups.map((tribe: any) => {
                return (
                  <TribeContent
                    key={tribe.id}
                    tribe={tribe}
                    group={group}
                    setGroup={setGroup}
                  />
                );
              })}
          </TribeContentWrapper>
        </TribeList>
      </GroupViewer>
    </GroupSelectViewContainer>
  );
}

const GroupSelectViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  margin-left: 32px;
  user-select: none;
`;

const SearchBar = styled.div`
  position: relative;
  display: flex;
  width: 260px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
`;

const TextInput = styled.input`
  width: 150px;
  height: 24px;
  margin: 6px 64px 4px 4px;
  border: none;
  outline: none;
`;

const SearchDropDown = styled.div``;

const NameContainer = styled.div`
  position: absolute;
  /* margin: 40px -200px 0 0; */
  left: 0px;
  top: 41px;
  display: block;
  width: 260px;
  height: 180px;
  overflow: scroll;
  background-color: #ffffff;
  z-index: 1;
`;

const SearchIconBox = styled.div`
  width: 20px;
  height: 20px;
  margin: 8px 8px;
`;

const GroupViewer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 867px;
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  border-radius: 4px;
  background-color: #f7f9fb;
`;

const GroupController = styled.div`
  display: flex;
  height: 56px;

  &:hover {
    background-color: rgba(63, 81, 181, 0.08);
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15px;
  margin: 12px 8px 12px 16px;
  cursor: pointer;
`;

const AllMember = styled.div`
  width: 30px;
  height: 20px;
  border-radius: 16px;
  margin: 15px 8px;
  background-color: #ebeff5;
`;

const MemberNumber = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #6b7382;
  padding: 2px 7px;
`;

const PlusIconBox = styled.div`
  width: 28px;
  height: 23px;
  margin: 10px 10px 14px 60px;
  padding: 0 6px;
  line-height: 30px;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: rgba(142, 153, 171, 0.08);
  }
`;

const TribeList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TribeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

//그룹 추가 모달
const GroupAddModalContainer = styled.div`
  width: 398px;
  height: 218px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const GroupAddTitle = styled.div`
  width: 350px;
  height: 32px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15px;
  margin: 16px 24px 16px 24px;
  color: rgba(44, 50, 61, 0.87);
`;

const GroupAddModalInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 56px;
  border-radius: 4px;
  margin: 0 24px 0 24px;
  background-color: #ebeff5;
`;

const AddName = styled.div`
  margin: 8px 0 0 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  align-items: center;
  color: rgba(44, 50, 61, 0.6);
`;

const AddNameInput = styled.input`
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

const AddGroupCloseButton = styled.div`
  width: 120px;
  height: 42px;
  margin: 32px 12px 24px 93px;
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

const AddGroupAddButton = styled.div`
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
  width: 120px;
  height: 42px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  color: rgba(70, 77, 90, 0.26);
  text-align: center;
  margin: 10px auto;
`;

export default GroupSelectView;
