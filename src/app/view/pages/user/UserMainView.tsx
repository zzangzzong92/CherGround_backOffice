import UserMainViewApi from "data/api/member/UserMainViewApi";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserGroupSelectView from "../user/UserGroupSelectView";
import Header from "../Component/Header";
import UserListView from "./UserListView";

interface Users {
  id: number;
  email: string;
  job?: string;
  name: string;
  phoneNumber: number;
  position?: string;
  profileImgUrl?: string;
  member: [];
}

export default function UserMainView() {
  const [users, setUsers] = useState([]); // 멤버 (회사에 소속되어 있지 않은 사람)
  const [groupList, setGroupList] = useState([]); //그룹 리스트 {id, name, memberCount}

  useEffect(() => {
    //그룹조회
    new UserMainViewApi().getUserInfo().then((result: any) => {
      setGroupList(result);
    });
    // fetch("http://localhost:8080/group", {
    //   method: "GET",
    //   headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setGroupList(data);

    //     // setGroup(data);
    //   });
  }, []);

  return (
    <MainContainer>
      <Header />
      <Bottom>
        <UserGroupSelectView
          setUsers={setUsers}
          setGroupList={setGroupList}
          groupList={groupList}
        />
        <UserListView
          setUsers={setUsers}
          users={users}
          setGroupList={setGroupList}
          groupList={groupList}
        />
      </Bottom>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
`;
