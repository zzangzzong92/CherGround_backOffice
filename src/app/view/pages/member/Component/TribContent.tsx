import React from "react";
import styled from "styled-components";

function TribeContent(tribelist: any){
  

  return(
    <ListContainer>
      <TribeName>
        {tribelist.name}
      </TribeName>
      <TribeMemberNumber>
        {tribelist.membernumber}
      </TribeMemberNumber>
    </ListContainer>
  )
}

const ListContainer = styled.div`
  display: flex;
  width: 260px;
  height: 44px;
  margin-top: 8px;
  padding-left: 16px;
`

const TribeName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgba(44, 50, 61, 0.87);
  letter-spacing: 0.15px;
  line-height: 150%;
`

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
  background-color: #EBEFF5;
  margin: 0 8px;
`
export default TribeContent;
