import React from "react";
import styled from "styled-components";



function TableContent(MemberList: any) {

  
  return(
    <TableListContainer>
      <MemberListInfo>
        <Member>
          <MemberImg>{MemberList.name.slice(1)}</MemberImg>
          <MemberName>{MemberList.name}</MemberName>
        </Member>
        <Member>{MemberList.position}</Member>
        <Member>{MemberList.job}</Member>
        <Member>
          {MemberList.group && MemberList.group.map((group: Array<string>) => {
            console.log(group);
            return(
            <Group>
              {group}
            </Group>
            )
          })}
        </Member>
        <Member>{MemberList.phone}</Member>
        <Member>{MemberList.email}</Member>
      </MemberListInfo>
    </TableListContainer>
  )
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
  color: #F3F5F9;
  background-color: #8E99AB;
`;

const MemberName = styled.div`
  width: 39px;
  height: 20px;
  margin-left: 20px;
`;

const MemberListInfo = styled.div`
  display: flex;
`;

const Member = styled.div`
  height: 36px;
  background-color: #EBEFF5;
  text-decoration: none;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.1px;
  margin-top: 8px;
  background-color: #FFFFFF;
  color: rgba(44, 50, 61, 0.87);
  text-align: center;

  :first-child{
    display: flex;
    width: 160px;
  }
  :nth-child(2){
    width: 200px;
  }
  :nth-child(3){
    width: 120px;
  }
  :nth-child(4){
    display: flex;
    margin-left: 40px;
    margin-top: 15px;
    width: 100px;
  }
  :nth-child(5){
    margin-left: 40px;
    width: 180px;
  }
  :nth-child(6){
    width: 240px;
  }
`;

const Group = styled.div`
  /* display: flex; */
  width: fit-content;
  height: fit-content;
  background-color: #EBEFF5;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: rgba(44, 50, 61, 0.87);
  margin: 0 auto;
`

export default TableContent;