import React from "react";
import styled from "styled-components";

export default function SearchAttendeesDrop() {
  return (
    <SearchAttendeesDropContainer>
      <AttendeeName>
        <AttendeeNameSpan></AttendeeNameSpan>
      </AttendeeName>
      <AttendeePosition>
        <AttendeePositionSpan></AttendeePositionSpan>
      </AttendeePosition>
    </SearchAttendeesDropContainer>
  );
}

const SearchAttendeesDropContainer = styled.div`
  width: 260px;
  height: 36px;
  display: flex;
  justify-content: space-between;

  cursor: pointer;

  :hover {
    background-color: rgba(74, 110, 177, 0.08);
  }
`;

const AttendeeName = styled.div`
  width: 100px;
  height: 24px;
`;

const AttendeeNameSpan = styled.div`
  width: 120px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin: 6px 16px;
  color: rgba(44, 50, 61, 0.87);
`;

const AttendeePosition = styled.div`
  width: 50px;
  height: 24px;
`;

const AttendeePositionSpan = styled.div`
  width: 50px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.4px;
  margin-top: 8px;
  color: rgba(44, 50, 61, 0.6);
`;
