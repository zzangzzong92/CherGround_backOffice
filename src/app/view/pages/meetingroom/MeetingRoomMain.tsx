import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MeetingRoomHeader from "./component/MeetingRoomHeader";
import SearchIcon from "../../assets/images/SearchIcon.svg";
import Plus from "../../assets/images/Plus.svg";
import ArrowLeftWhite from "../../assets/images/ArrowLeftWhite.svg";
import ArrowRightWhite from "../../assets/images/ArrowRightWhite.svg";
import ReservedMeeting from "./component/ReservedMeeting";
import HoursADay from "./util/HoursADay";

export default function MeetingRoomMain() {
  const [searchMember, setSearchMember] = useState<string>("");
  const [openSearchNameDrop, setOpenSearchNameDrop] = useState<boolean>(false);

  const [addMeetingRoom, setAddMeetingRoom] = useState();

  const times = [
    "오전 12시",
    "오전 1시",
    "오전 2시",
    "오전 3시",
    "오전 4시",
    "오전 5시",
    "오전 6시",
    "오전 7시",
    "오전 8시",
    "오전 9시",
    "오전 10시",
    "오전 11시",
    "오후 12시",
    "오후 1시",
    "오후 2시",
    "오후 3시",
    "오후 4시",
    "오후 5시",
    "오후 6시",
    "오후 7시",
    "오후 8시",
    "오후 9시",
    "오후 10시",
    "오후 11시",
  ];

  useEffect(() => {
    //멤버 찾기
    if (searchMember) {
      fetch(`http://localhost:8080/search?name=${searchMember}`, {
        method: "GET",
        headers: { Authorization: `Bearer ${sessionStorage.getItem("ID")}` },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setSearchMember(data);
        })
        .then(() => {
          setOpenSearchNameDrop(true);
        });
    } else {
      setOpenSearchNameDrop(false);
    }
  }, [searchMember]);

  const AddMeetingRoom = () => {
    fetch(``, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("ID")}`,
        mode: "cors",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((result) => setAddMeetingRoom(result));
  };

  return (
    <MeetingRoomMainContainer>
      <MeetingRoomHeader />
      {/* 좌측 */}
      <LeftRightWrapper>
        <LeftReserveView>
          <MeetingRoomSearchNCalendar>
            <MeetingRoomSearchWrapper>
              <MeetingRoomSearchbar>
                <TextInput
                  type="text"
                  placeholder="회의명 검색"
                  // onChange={onChangeSearch}
                  // value={search}
                ></TextInput>
                <SearchIconBox>
                  <SearchIcon />
                </SearchIconBox>
              </MeetingRoomSearchbar>
            </MeetingRoomSearchWrapper>
            <CalendarButtonWrapper>
              <LeftButton>
                <Icon>
                  <ArrowLeftWhite />
                </Icon>
              </LeftButton>
              <TodaySpan>
                <Today>오늘</Today>
              </TodaySpan>
              <RightButton>
                <Icon>
                  <ArrowRightWhite />
                </Icon>
              </RightButton>
            </CalendarButtonWrapper>
          </MeetingRoomSearchNCalendar>

          <CalendarTableHeader>
            <TableTime>
              <TimeSpan>시간</TimeSpan>
            </TableTime>
            <TableHQMeetingRoom>
              <TableContentSpan>📙 본사 회의실</TableContentSpan>
              <PlusIconBox>
                <Plus />
              </PlusIconBox>
            </TableHQMeetingRoom>
            <TableLapsMeetingRoom>
              <TableContentSpan>📘 랩스 회의실</TableContentSpan>
              <PlusIconBox>
                <Plus />
              </PlusIconBox>
            </TableLapsMeetingRoom>
            <TableLapsPhone>
              <TableContentSpan>📗 랩스 폰부스</TableContentSpan>
              <PlusIconBox>
                <Plus />
              </PlusIconBox>
            </TableLapsPhone>
          </CalendarTableHeader>
          <TimeTable>
            <TableBoard>
              {times &&
                times.map((time) => (
                  <>
                    <TableRow>
                      <TableDataTop>
                        <TimeDiv key={time}>{time}</TimeDiv>
                      </TableDataTop>
                      <TableDataTop></TableDataTop>
                      <TableDataTop></TableDataTop>
                      <TableDataTop></TableDataTop>
                    </TableRow>
                    <TableRow>
                      <TableDataBottom></TableDataBottom>
                      <TableDataBottom></TableDataBottom>
                      <TableDataBottom></TableDataBottom>
                      <TableDataBottom></TableDataBottom>
                    </TableRow>
                  </>
                ))}
            </TableBoard>
          </TimeTable>
        </LeftReserveView>

        <RightReservationInfo>
          <Weekdiv>
            <WeekSpan>다음주 (4.3 ~ 4.10)</WeekSpan>
          </Weekdiv>
          <ReservedMeetingList>
            <ReservedMeeting />
          </ReservedMeetingList>
        </RightReservationInfo>
      </LeftRightWrapper>
    </MeetingRoomMainContainer>
  );
}

const MeetingRoomMainContainer = styled.div`
  user-select: none;
`;

//왼쪽 전체
const LeftReserveView = styled.div`
  width: 1186px;
`;

const MeetingRoomSearchNCalendar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const LeftRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 28px;
`;

const MeetingRoomSearchWrapper = styled.div``;

const MeetingRoomSearchbar = styled.div`
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

const CalendarButtonWrapper = styled.div`
  width: 115px;
  height: 30px;
  display: flex;
  margin-right: 16px;
  background-color: #8e99ab;
  border-radius: 4px;
`;

const LeftButton = styled.div`
  width: 29px;
  height: 30px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;

  :hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      #8e99ab;
  }
`;

const TodaySpan = styled.div`
  width: 57px;
  height: 30px;
  cursor: pointer;

  :hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      #8e99ab;
  }
`;

const Today = styled.div`
  width: 54px;
  height: 20px;
  text-align: center;
  margin-top: 5px;
  border-left: 1px solid #6b7382;
  border-right: 1px solid #6b7382;
  color: #ffffff;
`;

const RightButton = styled.div`
  width: 29px;
  height: 30px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;

  :hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      #8e99ab;
  }
`;

const Icon = styled.div`
  width: 7px;
  height: 9px;
  margin: 6px auto;
`;

const CalendarTableHeader = styled.div`
  display: flex;
  margin-top: 8px;
  background: #ebeff5;
`;

const TableTime = styled.div`
  width: 100px;
  height: 46px;
  border-bottom: 2px solid #8e99ab;
  border-right: 1px solid #8e99ab;
`;

const TimeSpan = styled.div`
  width: 26px;
  height: 22px;
  margin: 12px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: rgba(44, 50, 61, 0.87);
`;

const TableHQMeetingRoom = styled.div`
  width: 362px;
  height: 46px;
  display: flex;
  border-bottom: 2px solid #8e99ab;
  border-right: 1px solid #8e99ab;
`;

const TableLapsMeetingRoom = styled.div`
  width: 362px;
  height: 46px;
  display: flex;
  border-bottom: 2px solid #8e99ab;
  border-right: 1px solid #8e99ab;
`;

const TableLapsPhone = styled.div`
  width: 362px;
  height: 46px;
  display: flex;
  border-bottom: 2px solid #8e99ab;
`;

const TableContentSpan = styled.div`
  width: 100px;
  height: 22px;
  margin: 12px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: rgba(44, 50, 61, 0.87);
`;

const PlusIconBox = styled.div`
  width: 12px;
  height: 12px;
  margin: 15px 20px 0 190px;
  border-radius: 50%;
  cursor: pointer;

  /* :hover {
    background-color: ;
  } */
`;

//테이블 보드
const TimeTable = styled.div`
  width: 1186px;
  overflow: scroll;
`;

const TableBoard = styled.div``;

const TableRow = styled.div`
  display: flex;
`;

const TimeDiv = styled.div`
  position: absolute;
  top: -70px;
  width: 70px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  padding-left: 5px;
  letter-spacing: 0.4px;
  color: rgba(44, 50, 61, 0.6);
  background-color: white;
`;

const TableDataTop = styled.div`
  :first-child {
    position: relative;
    width: 100px;
    height: 60px;
    border-right: 1px solid #8e99ab;
  }

  :nth-child(2) {
    width: 362px;
    height: 60px;
    border-right: 1px solid #ebeff5;
  }

  :nth-child(3) {
    width: 362px;
    height: 60px;
    border-right: 1px solid #ebeff5;
  }

  :nth-child(4) {
    width: 362px;
    height: 60px;
  }
`;

const TableDataBottom = styled.div`
  :first-child {
    position: relative;
    width: 100px;
    height: 60px;
    border-top: 1px solid #8e99ab;
    border-right: 1px solid #8e99ab;
  }

  :nth-child(2) {
    width: 362px;
    height: 60px;
    border-top: 1px solid #8e99ab;
    border-right: 1px solid #ebeff5;
    border-bottom: 1px dotted #ebeff5;
  }

  :nth-child(3) {
    width: 362px;
    height: 60px;
    border-top: 1px solid #8e99ab;
    border-right: 1px solid #ebeff5;
    border-bottom: 1px dotted #ebeff5;
  }

  :nth-child(4) {
    width: 362px;
    height: 60px;
    border-top: 1px solid #8e99ab;
    border-bottom: 1px dotted #ebeff5;
  }
`;

const Weekdiv = styled.div`
  width: 406px;
  height: 57px;
`;

const WeekSpan = styled.div`
  width: auto;
  height: 32px;
  font-weight: 500;
  font-size: 20px;
  margin: 12px 20px;
  line-height: 32px;
  align-items: center;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

//오른쪽 전체
const RightReservationInfo = styled.div`
  width: 406px;
  background: #f7f9fb;
  border: 1px solid black;
`;

const ReservedMeetingList = styled.div`
  width: 406px;
  display: flex;
  flex-direction: column;
`;
