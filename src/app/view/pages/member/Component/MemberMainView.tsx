import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import GroupSelectView from "./GroupSelectView";
import Header from "./Header";
import MemberListView from "./MemberListView";

function MemberMainView() {
  const [group, setGroup] = useState<number>(1); //그룹 (group안에 그룹에 대한 정보, 멤버에 대한 정보 다 있음)
  const [groupList, setGroupList] = useState<Array<string>>([]); //그룹 리스트 {id, name, memberCount}

  const params: { id: string } = useParams();
  useEffect(() => {
    //그룹조회
    fetch("http://localhost:8080/group", {
      method: "GET",
      headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setGroupList(data);
        setGroup(data);
      });
  }, []);

  return (
    <MainContainer>
      <Header />
      <Bottom>
        <GroupSelectView
          setGroupList={setGroupList}
          groupList={groupList}
          group={group}
          setGroup={setGroup}
        />

        <MemberListView
          setGroupList={setGroupList}
          groupList={groupList}
          group={group}
          setGroup={setGroup}
          groupId={params.id}
        />
      </Bottom>
    </MainContainer>
  );
}

export default MemberMainView;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Bottom = styled.div`
  display: flex;
`;
