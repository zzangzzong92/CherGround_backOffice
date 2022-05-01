import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";

function TribeContent({ tribe, group, setGroup }: any) {
  const [sortCondition, setSortCondition] = useState<string>("name");
  const history = useHistory();

  const clickPart = () => {
    // fetch(
    //   `http://localhost:8080/group/${tribe.id}/member?sort=${sortCondition}&page=1&amount=15`,
    //   {
    //     method: "GET",
    //     headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((groupData) => {
    //     setGroup(groupData);
    //     console.log(groupData);
    //   });
    history.push(`/group/${tribe.id}`);
  };

  return (
    <ListContainer onClick={clickPart}>
      <TribeName>{tribe.name}</TribeName>
      <TribeMemberNumber>{tribe.members.length}</TribeMemberNumber>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: flex;
  width: 242px;
  height: 44px;
  margin-top: 8px;
  padding-left: 16px;
  cursor: pointer;

  :hover {
    background-color: rgba(63, 81, 181, 0.08);
    font-weight: bold;
  }
`;

const TribeName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgba(44, 50, 61, 0.87);
  margin-top: 12px;
  letter-spacing: 0.15px;
  line-height: 150%;
`;

const TribeMemberNumber = styled.div`
  width: 23px;
  height: 20px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.4px;
  color: rgba(44, 50, 61, 0.87);
  justify-content: center;
  border-radius: 50%;
  background-color: #ebeff5;
  padding-top: 2px;
  margin: 12px 8px;
`;

export default TribeContent;
