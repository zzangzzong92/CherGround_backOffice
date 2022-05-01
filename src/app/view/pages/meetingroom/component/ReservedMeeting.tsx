import React from "react";
import styled from "styled-components";

export default function ReservedMeeting() {
  return (
    <ReservedMeetingContainer>
      <ReservedTime>
        <ReservedDate>28</ReservedDate>
        <ReservedDay>월</ReservedDay>
      </ReservedTime>
      {/* 여기 map 돌릴자리 */}
      <ReservedContentWrapper>
        <ReservedContent>
          <MeetingName>개발팀 스크럼</MeetingName>
          <MeetingTime>10:00 ~ 10:30</MeetingTime>
        </ReservedContent>
      </ReservedContentWrapper>
    </ReservedMeetingContainer>
  );
}

const ReservedMeetingContainer = styled.div`
  display: flex;
  border: 1px solid black;
`;

const ReservedTime = styled.div`
  display: flex;
  width: 70px;
  border: 1px solid blue;
`;

const ReservedDate = styled.div`
  width: 27px;
  height: 32px;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  margin: 5px 0 0 5px;
  color: rgba(44, 50, 61, 0.87);
`;

const ReservedDay = styled.div`
  width: 15px;
  height: 24px;
  margin: 8px 0 0 7px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const ReservedContentWrapper = styled.div``;

const ReservedContent = styled.div`
  width: 337px;
  display: flex;
  justify-content: space-between;
`;

const MeetingName = styled.div`
  width: auto;
  height: 22px;
  margin: 7px 0 0 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  align-items: center;
  letter-spacing: 0.1px;
  color: rgba(44, 50, 61, 0.26);
`;

const MeetingTime = styled.div`
  width: 80px;
  height: 20px;
  margin: 10px 5px 0 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  align-items: center;
  text-align: right;
  letter-spacing: 0.4px;
  color: rgba(44, 50, 61, 0.6);
`;
