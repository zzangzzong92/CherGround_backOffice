import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchIcon from "../../../assets/images/SearchIcon.svg";
import Plus from "../../../assets/images/Plus.svg";
import TribeContent from "./TribContent";

function GroupSelectView() {
  const [listData, setListData] = useState<Array<string>>([]);
  const [search, setSearch] = useState<string>("");

  const onChangeSearch = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:3000/public/data/Tribe.json", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setListData(data);
      });
  }, []);

  return (
    <GroupSelectViewContainer>
      <SearchBar>
        <TextInput type="text" placeholder="파트, 이름 검색" />
        <SearchIconBox>
          <SearchIcon />
        </SearchIconBox>
      </SearchBar>
      <GroupViewer>
        <GroupController>
          <Title>CherGround</Title>
          <AllMember>
            <MemberNumber>37</MemberNumber>
          </AllMember>
          <PlusIconBox>
            <Plus />
          </PlusIconBox>
        </GroupController>
        <TribeList>
          <TribeContentWrapper>
            {listData &&
              listData.map((tribelist: any) => {
                return (
                  <TribeContent
                    key={tribelist.id}
                    name={tribelist.name}
                    membernumber={tribelist.membernumber}
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
  background-color: rgba(63, 81, 181, 0.08);
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0.15px;
  margin: 12px 8px 12px 16px;
`;

const AllMember = styled.div`
  width: 30px;
  height: 20px;
  border-radius: 16px;
  margin: 15px 8px;
  background-color: rgba(70, 77, 90, 0.12);
`;

const MemberNumber = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #6b7382;
  padding: 2px 7px;
`;

const PlusIconBox = styled.div`
  width: 28px;
  height: 28px;
  margin: 14px 14px 14px 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const TribeList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TribeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default GroupSelectView;
