import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import MeetingRoomReservationModal from "app/view/pages/meetingroom/component/MeetingRoomReservationModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import ArrowUp from "../../../assets/images/ArrowUp.svg";
import ArrowDown from "../../../assets/images/ArrowDown.svg";
import ThinArrowUp from "../../../assets/images/ThinArrowUp.svg";
import ThinArrowDown from "../../../assets/images/ThinArrowDown.svg";
import ArrowLeftWhite from "../../../assets/images/ArrowLeftWhite.svg";
import ArrowRightWhite from "../../../assets/images/ArrowRightWhite.svg";

export default function MeetingRoomHeader() {
  const [openReservation, setOpenReservation] = useState<boolean>(false);
  const [openSelectMeetingRoomDrop, setOpenSelectMeetingRoomDrop] =
    useState<boolean>(false);
  const [selectMeetingRoom, setSelectMeetingRoom] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [checkAM, setCheckAM] = useState<Array<string>>([
    "12:00",
    "12:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ]);

  const [checkPM, setCheckPM] = useState<Array<string>>([
    "12:00",
    "12:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
    "5:30",
    "6:00",
    "6:30",
    "7:00",
    "7:30",
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ]);

  const [dateCheckedBcco, setDateCheckedBcco] = useState<boolean>(false);
  const [buttonState, setButtonState] = useState(); //시간선택상태
  const [timeChecked, setTimeChecked] = useState();

  //date-picker
  //시작시간
  const [startDate, setStartDate] = useState(new Date());

  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const [openTimePicker, setOpenTimePicker] = useState<boolean>(false);

  let today = new Date();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  // let day = today.getDay();
  let koDay = ["일", "월", "화", "수", "목", "금", "토"];
  let weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  let dayOfWeek = koDay[new Date().getDay()];
  let dateString = month + "." + date + "(" + dayOfWeek + ")";

  let AM = [
    "12:00",
    "12:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];

  let PM = [
    "12:00",
    "12:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
    "5:30",
    "6:00",
    "6:30",
    "7:00",
    "7:30",
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
  ];

  const CustomInput = forwardRef(
    ({ value, onClick }: any, ref: React.ForwardedRef<HTMLInputElement>) => (
      <div onClick={onClick} ref={ref}>
        {value}
      </div>
    )
  );

  const place = ["📙 본사 회의실", "📘 랩스 회의실", "📗 랩스 폰부스"];

  const HQMeetingRoom = () => {
    setSelectMeetingRoom(place[0]);
    setOpenSelectMeetingRoomDrop(false);
  };

  const LapsMeetinRoom = () => {
    setSelectMeetingRoom(place[1]);
    setOpenSelectMeetingRoomDrop(false);
  };

  const LapsPhone = () => {
    setSelectMeetingRoom(place[2]);
    setOpenSelectMeetingRoomDrop(false);
  };

  const clickClock = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const clickOfficeTime = () => {
    const newAM = Array(AM.length).slice(19);
    setCheckAM(newAM);
    const newPM = Array(PM.length).slice(14, 23);
    setCheckPM(newPM);
  };

  //업무시간만 보기 버튼
  // const SortOfficeHour = (e: React.ChangeEvent<>) => {};

  return (
    <MeetingRoomHeaderContainer>
      <CalendarSelectWrapper>
        <CalendarDate>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            locale={ko}
            dateFormat={"MM월" + "dd일" + "E요일"}
            useWeekdaysShort={true}
            disabledKeyboardNavigation
            customInput={<CustomInput />}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <>
                <div className="custom-header">
                  <div className="LeftButton" onClick={decreaseMonth}>
                    <ArrowLeftWhite />
                  </div>

                  <div className="custom-month">
                    {date.getMonth() + 1}월, {date.getFullYear()}년
                  </div>

                  <div className="RightButton" onClick={increaseMonth}>
                    <ArrowRightWhite />
                  </div>
                </div>
                <div className="week">
                  {weekDays.map((day) => (
                    <div className="mapWeek">{day}</div>
                  ))}
                </div>
              </>
            )}
          >
            <DatePickerButtonWrapper>
              <DatePickerCloseButton>
                <DatePickerClose>취소</DatePickerClose>
              </DatePickerCloseButton>
              <DatePickerSelectButton>
                <SelectDate>확인</SelectDate>
              </DatePickerSelectButton>
            </DatePickerButtonWrapper>
          </DatePicker>
        </CalendarDate>
        <CalendarIconBox>
          {/* { ? <ThinArrowUp /> : <ThinArrowDown />} */}
        </CalendarIconBox>
      </CalendarSelectWrapper>
      <ReservationButtonWrapper>
        <ReservationSpan
          onClick={() => {
            setOpenReservation(true);
          }}
        >
          회의실 예약하기
        </ReservationSpan>
        {openReservation && (
          <MeetingRoomReservationModal
            width="434px"
            height="469px"
            margin="-400px 100px 50px -700px"
          >
            <ReservationMeetingRoomContainer>
              <ReservationMeetingRoomSpan>
                회의실 예약
              </ReservationMeetingRoomSpan>
              <MeetingTextWrapper>
                <MeetingName>회의 이름</MeetingName>
                <MeetingNameInput
                  // onChange={SearchHandler}
                  type="text"
                  placeholder="캘린더에 표시될 이름을 입력해주세요."
                  // onChange={handleAddMemberInput}
                ></MeetingNameInput>
              </MeetingTextWrapper>
              <SelectMeetingRoom
                onClick={() =>
                  setOpenSelectMeetingRoomDrop(!openSelectMeetingRoomDrop)
                }
              >
                <SelectMeetingRoomSpan>
                  {selectMeetingRoom ? selectMeetingRoom : "회의실 선택"}
                </SelectMeetingRoomSpan>
                <IconBox>
                  {openSelectMeetingRoomDrop ? <ArrowUp /> : <ArrowDown />}
                </IconBox>
              </SelectMeetingRoom>
              {openSelectMeetingRoomDrop && (
                <KindOfMeetingRoom>
                  <MeetingRoomContent onClick={HQMeetingRoom}>
                    <Content>📙 본사 회의실</Content>
                  </MeetingRoomContent>
                  <MeetingRoomContent onClick={LapsMeetinRoom}>
                    <Content>📘 랩스 회의실</Content>
                  </MeetingRoomContent>
                  <MeetingRoomContent onClick={LapsPhone}>
                    <Content>📗 랩스 폰부스</Content>
                  </MeetingRoomContent>
                </KindOfMeetingRoom>
              )}
              <MeetingRoomTime>
                <MeetingRoomTimeSpan>
                  <TimeSpan>시간 설정</TimeSpan>
                </MeetingRoomTimeSpan>

                <TimeWrapper>
                  <DateSelect
                    onClick={() => {
                      setOpenDatePicker(!openDatePicker);
                    }}
                  >
                    <Today>
                      <DatePicker
                        selected={startDate}
                        onChange={(date: Date) => setStartDate(date)}
                        locale={ko}
                        dateFormat={"MM." + "dd." + "(E)"}
                        useWeekdaysShort={true}
                        disabledKeyboardNavigation
                        customInput={<CustomInput />}
                        renderCustomHeader={({
                          date,
                          decreaseMonth,
                          increaseMonth,
                        }) => (
                          <>
                            <div className="custom-header">
                              <div
                                className="LeftButton"
                                onClick={decreaseMonth}
                              >
                                <ArrowLeftWhite />
                              </div>

                              <div className="custom-month">
                                {date.getMonth() + 1}월, {date.getFullYear()}년
                              </div>

                              <div
                                className="RightButton"
                                onClick={increaseMonth}
                              >
                                <ArrowRightWhite />
                              </div>
                            </div>
                            <div className="week">
                              {weekDays.map((day) => (
                                <div className="mapWeek">{day}</div>
                              ))}
                            </div>
                          </>
                        )}
                      >
                        <DatePickerButtonWrapper>
                          <DatePickerCloseButton>
                            <DatePickerClose>취소</DatePickerClose>
                          </DatePickerCloseButton>
                          <DatePickerSelectButton>
                            <SelectDate>확인</SelectDate>
                          </DatePickerSelectButton>
                        </DatePickerButtonWrapper>
                      </DatePicker>
                    </Today>
                    <DateIconBox>
                      {openDatePicker ? <ThinArrowUp /> : <ThinArrowDown />}
                    </DateIconBox>
                  </DateSelect>

                  <TimePicker
                    onClick={() => {
                      setOpenTimePicker(!openTimePicker);
                    }}
                  >
                    {/* <TimeSelect> */}
                    <TimeSelectSpan>시간 선택</TimeSelectSpan>
                    <TimeSelectIconBox>
                      {openTimePicker ? <ThinArrowUp /> : <ThinArrowDown />}
                    </TimeSelectIconBox>
                    {/* </TimeSelect> */}
                  </TimePicker>
                  {openTimePicker && (
                    <DateSelectBox>
                      <DateSelectTop>
                        <DateSelectTitle>예약 시간</DateSelectTitle>
                        <OfficeHourButton>
                          <SortButton
                            type="checkbox"
                            onClick={() => {
                              clickOfficeTime;
                            }}
                          ></SortButton>
                          <SortButtonSpan>업무시간만 보기</SortButtonSpan>
                        </OfficeHourButton>
                      </DateSelectTop>
                      <DateSelectMiddle>
                        <AllTimeButtonWrapper>
                          <AMDiv>
                            <AMSpan>오전</AMSpan>
                            <AMTimeWrapper>
                              {AM.map((amtime) => {
                                <TimeDiv
                                  key={amtime}
                                  onClick={(
                                    e: React.MouseEvent<HTMLElement>
                                  ) => {
                                    clickClock(e);
                                  }}
                                >
                                  <TimeDivSpan>{amtime}</TimeDivSpan>
                                </TimeDiv>;
                              })}
                            </AMTimeWrapper>
                          </AMDiv>
                          <PMDiv>
                            <PMSpan>오후</PMSpan>
                            <PMTimeWrapper>
                              {PM.map((pmtime) => (
                                <TimeDiv key={pmtime}>
                                  <TimeDivSpan>{pmtime}</TimeDivSpan>
                                </TimeDiv>
                              ))}
                            </PMTimeWrapper>
                          </PMDiv>
                        </AllTimeButtonWrapper>
                      </DateSelectMiddle>
                      <ReservedContentSpanBox>
                        • 선택된 시간부터 선택된 시간까지 예약
                      </ReservedContentSpanBox>
                      <DateSelectButtonWrapper>
                        <DateSelectCloseButton
                          onClick={() => {
                            setOpenTimePicker(false);
                          }}
                        >
                          <DateSelectClose>취소</DateSelectClose>
                        </DateSelectCloseButton>
                        <DateSelectOkButton onClick={() => {}}>
                          <DateSelectOk>확인</DateSelectOk>
                        </DateSelectOkButton>
                      </DateSelectButtonWrapper>
                    </DateSelectBox>
                  )}
                </TimeWrapper>
                <AttendeeBox>
                  <AddAttendeeTag></AddAttendeeTag>
                  <AttendeeSpan>참석자</AttendeeSpan>
                  <AttendeeInput
                    type="text"
                    placeholder="참석자 이름, 그룹을 입력해주세요."
                  ></AttendeeInput>
                  {}
                </AttendeeBox>

                <ButtonWrapper>
                  <CloseButton
                    onClick={() => {
                      setOpenReservation(false);
                    }}
                  >
                    <Close>취소</Close>
                  </CloseButton>
                  <ReservationButton>
                    <Reservation>예약</Reservation>
                  </ReservationButton>
                </ButtonWrapper>
              </MeetingRoomTime>
            </ReservationMeetingRoomContainer>
          </MeetingRoomReservationModal>
        )}
      </ReservationButtonWrapper>
    </MeetingRoomHeaderContainer>
  );
}

const MeetingRoomHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  user-select: none;
`;

const CalendarSelectWrapper = styled.div`
  display: flex;
  cursor: pointer;

  .custom-header {
    display: flex;
    justify-content: space-around;
  }

  .custom-month {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }

  .react-datepicker {
    width: 320px;
    height: 389px;
    margin: 4px 0 0 -14px;
  }

  /* .react-datepicker-wrapper {
    display: none;
  } */

  /* .react-datepicker__input-time-container {
    display: none;
  } */

  .react-datepicker__header {
    margin-top: -20px;
    background-color: white;
    border: none;
  }
  .react-datepicker__current-month {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .LeftButton,
  .RigthButton {
    width: 20px;
    height: 20px;
  }

  .react-datepicker__navigation {
    top: 43px;
  }

  .react-datepicker__navigation--previous {
    top: 20px;
    left: 20px;
  }

  .react-datepicker__navigation--next {
    top: 20px;
    right: 20px;
  }

  .react-datepicker__month-container {
    margin: 20px;
  }

  .react-datepicker__day-names {
    display: none;
  }

  .week {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    font-weight: 400;
    font-size: 12px;
    color: rgba(44, 50, 61, 0.6);
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 0.3rem;
    background-color: #8e99ab;
  }

  .react-datepicker__day-name {
    margin: 5px;
    color: #222222;
  }

  .react-datepicker__week {
    color: #222222;
  }

  .react-datepicker__day {
    margin: 5px;
    color: #222222;
    border-radius: 30px;

    &--keyboard-selected {
      background-color: #fff;
    }
  }
`;

const CalendarDate = styled.div`
  width: 180px;
  height: 32px;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const CalendarIconBox = styled.div`
  margin-top: 4px;
`;

//모달창 안 버튼
const DatePickerButtonWrapper = styled.div`
  width: 310px;
  display: flex;
`;

const DatePickerCloseButton = styled.div`
  width: 59px;
  height: 36px;
  border-radius: 4px;
  margin-left: 146px;
  border: 1px solid #333848;
  cursor: pointer;
`;

const DatePickerClose = styled.div`
  width: 55px;
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  line-height: 34px;
  letter-spacing: 0.4px;
  text-align: center;
  color: #333840;
`;

const DatePickerSelectButton = styled.div`
  width: 59px;
  height: 38px;
  margin-left: 12px;
  background: #333840;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.04), 0px 1px 5px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  cursor: pointer;
`;

const SelectDate = styled.div`
  width: 55px;
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  line-height: 34px;
  letter-spacing: 0.4px;
  text-align: center;
  color: #ffffff;
`;

//예약 버튼
const ReservationButtonWrapper = styled.div`
  width: 140px;
  height: 42px;
  border-radius: 4px;
  background: #333840;
`;

const ReservationSpan = styled.div`
  width: 140px;
  height: 42px;
  font-weight: 500;
  font-size: 15px;
  line-height: 42px;
  letter-spacing: 0.46px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
`;

//회의실 예약 모달
const ReservationMeetingRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReservationMeetingRoomSpan = styled.div`
  width: 350px;
  height: 32px;
  margin: 16px 60px 16px 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const MeetingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 386px;
  height: 55px;
  border-radius: 4px;
  margin: 0px 24px;
  background-color: #ebeff5;
`;

const MeetingName = styled.div`
  margin: 8px 0 0 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  align-items: center;
  color: rgba(44, 50, 61, 0.6);
`;

const MeetingNameInput = styled.input`
  outline: none;
  border: none;
  margin-left: 10px;
  background-color: #ebeff5;
`;

const SelectMeetingRoom = styled.div`
  width: 386px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  margin: 16px 24px 0 24px;
  background-color: #ebeff5;
  cursor: pointer;
`;

const SelectMeetingRoomSpan = styled.div`
  width: 100px;
  height: 24px;
  margin: 16px 0 0 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(44, 50, 61, 0.87);
`;

const IconBox = styled.div`
  width: 15px;
  height: 15px;
  margin: 20px 19px 25px 0;
`;

const KindOfMeetingRoom = styled.div`
  width: 388px;
  height: 124px;
  display: flex;
  margin: 0 24px;
  position: absolute;
  top: 210px;
  border-radius: 4px;
  background-color: #ffffff;
  flex-direction: column;
  z-index: 1;
`;

const MeetingRoomContent = styled.div`
  width: 386px;
  height: 36px;
  :nth-child(2) {
    background: rgba(74, 110, 177, 0.08);
  }
`;

const Content = styled.div`
  width: 110px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin: 6px 16px;
  color: rgba(44, 50, 61, 0.87);
  cursor: pointer;
`;

const MeetingRoomTime = styled.div`
  width: 386px;
  height: 87px;
  margin: 20px 24px 0 24px;
`;

const MeetingRoomTimeSpan = styled.div`
  width: 64px;
  height: 28px;
`;

const TimeSpan = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const TimeWrapper = styled.div`
  display: flex;
  margin-top: 12px;
`;

const DateSelect = styled.div`
  width: 120px;
  height: 47px;
  display: flex;
  background-color: #ebeff5;
  border-radius: 4px;
`;

const Today = styled.div`
  width: 80px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  margin: 12px 0 0 12px;
  color: rgba(44, 50, 61, 0.87);

  .custom-header {
    display: flex;
    justify-content: space-around;
  }

  .custom-month {
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }

  .react-datepicker {
    width: 320px;
    height: 389px;
    margin: 4px 0 0 -14px;
  }

  .react-datepicker__header {
    margin-top: -20px;
    background-color: white;
    border: none;
  }
  .react-datepicker__current-month {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .LeftButton,
  .RigthButton {
    width: 20px;
    height: 20px;
  }

  .react-datepicker__navigation {
    top: 43px;
  }

  .react-datepicker__navigation--previous {
    top: 20px;
    left: 20px;
  }

  .react-datepicker__navigation--next {
    top: 20px;
    right: 20px;
  }

  .react-datepicker__month-container {
    margin: 20px;
  }

  .react-datepicker__day-names {
    display: none;
  }

  .week {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    font-weight: 400;
    font-size: 12px;
    color: rgba(44, 50, 61, 0.6);
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range,
  .react-datepicker__month-text--selected,
  .react-datepicker__month-text--in-selecting-range,
  .react-datepicker__month-text--in-range,
  .react-datepicker__quarter-text--selected,
  .react-datepicker__quarter-text--in-selecting-range,
  .react-datepicker__quarter-text--in-range,
  .react-datepicker__year-text--selected,
  .react-datepicker__year-text--in-selecting-range,
  .react-datepicker__year-text--in-range {
    border-radius: 0.3rem;
    background-color: #8e99ab;
  }

  .react-datepicker__day-name {
    margin: 5px;
    color: #222222;
  }

  .react-datepicker__week {
    color: #222222;
  }

  .react-datepicker__day {
    margin: 5px;
    color: #222222;
    border-radius: 30px;

    &--keyboard-selected {
      background-color: #fff;
    }
  }
`;

const DateIconBox = styled.div`
  width: 15px;
  height: 15px;
  margin: 13px 12px 0 0;
`;

const Calendar = styled.div`
  width: 320px;
  height: 389px;
  z-index: 1;
  position: absolute;
  top: 315px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #ffffff;
`;

const TimePicker = styled.div`
  width: 254px;
  height: 47px;
  display: flex;
  justify-content: space-between;
  margin-left: 12px;
  background-color: #ebeff5;
  border-radius: 4px;
`;

const TimeSelectSpan = styled.div`
  width: 100px;
  height: 24px;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.15px;
  margin: 12px 0 0 12px;
  color: rgba(44, 50, 61, 0.87);
`;

const TimeSelectIconBox = styled.div`
  width: 15px;
  height: 15px;
  margin: 13px 12px 0 0;
`;

//시간 설정 - 날짜 예약
const DateSelectBox = styled.div`
  width: 344px;
  height: 395px;
  position: absolute;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  z-index: 1;
  border-radius: 4px;
  top: 315px;
  left: 155px;
  background-color: #ffffff;
`;

const DateSelectTop = styled.div`
  width: 296px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #8e99ab;
  margin: 10px 24px 0 24px;
`;

const DateSelectTitle = styled.div`
  width: 64px;
  height: 28px;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  align-items: center;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const OfficeHourButton = styled.div`
  width: 105px;
  height: 20px;
  display: flex;
  margin-top: 3px;
`;

const SortButton = styled.input`
  width: 15px;
  height: 15px;
`;

const SortButtonSpan = styled.div`
  width: 83px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  align-items: center;
  letter-spacing: 0.4px;
  color: rgba(44, 50, 61, 0.87);
`;

const DateSelectMiddle = styled.div`
  width: 344px;
  height: 250px;
  margin: 10px 14px 0 14px;
`;

//예약 내용 표시
const ReservedContentSpanBox = styled.div`
  width: 296px;
  height: auto;
  margin: 10px 0 0 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const DateSelectButtonWrapper = styled.div`
  width: 344px;
  height: 200px;
  display: flex;
  margin-top: 15px;
`;

const DateSelectCloseButton = styled.div`
  width: 59px;
  height: 36px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 30px 12px 0 190px;
`;

const DateSelectClose = styled.div`
  width: 55px;
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  line-height: 34px;
  letter-spacing: 0.4px;
  color: #333840;
`;

const DateSelectOkButton = styled.div`
  width: 59px;
  height: 36px;
  border-radius: 4px;
  margin: 30px 0 0 0;
  background: rgba(70, 77, 90, 0.12);
`;

const DateSelectOk = styled.div`
  width: 55px;
  height: 34px;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  line-height: 34px;
  letter-spacing: 0.4px;
  color: rgba(70, 77, 90, 0.26);
`;

const AllTimeButtonWrapper = styled.div`
  width: 316px;
  height: 220px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

const AMSpan = styled.div`
  width: 26px;
  height: 22px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: rgba(44, 50, 61, 0.87);
`;

const AMDiv = styled.div`
  margin-left: 10px;
`;

const AMTimeWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const PMDiv = styled.div`
  margin-left: 10px;
  margin-top: 10px;
`;

const PMSpan = styled.div`
  width: 26px;
  height: 22px;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: rgba(44, 50, 61, 0.87);
`;

const PMTimeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const TimeDiv = styled.button`
  width: 60px;
  height: 30px;
  margin-bottom: 3px;
  background-color: #ffffff;
  border: 1px solid #8e99ab;
  cursor: pointer;

  :hover {
    background: rgba(63, 81, 181, 0.08);
  }
`;

const TimeDivSpan = styled.div`
  width: 44px;
  height: 22px;
  margin: 2px auto;
  font-weight: 500;
  font-size: 13px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.46px;
  color: #8e99ab;
`;

//참석자
const AttendeeBox = styled.div`
  width: 386px;
  height: 56px;
  display: flex;
  flex-direction: column;
  background-color: #ebeff5;
  border-radius: 4px;
  margin-top: 16px;
`;

const AttendeeSpan = styled.div`
  width: 34px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.4px;
  margin: 5px 0 0 12px;
  color: rgba(44, 50, 61, 0.6);
`;

const AddAttendeeTag = styled.div``;

const AttendeeInput = styled.input`
  border: none;
  outline: none;
  width: 250px;
  margin: 5px 0 0 12px;
  background-color: #ebeff5;
`;

//회의실 예약 취소/예약 버튼
const ButtonWrapper = styled.div`
  width: 434px;
  height: 98px;
  display: flex;
`;

const CloseButton = styled.div`
  width: 120px;
  height: 42px;
  margin: 32px 12px 24px 122px;
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

const ReservationButton = styled.div`
  width: 120px;
  height: 42px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin: 32px 24px 24px 10px;
  background-color: rgba(70, 77, 90, 0.12);
  border-radius: 4px;
  cursor: pointer;
`;

const Reservation = styled.div`
  width: 29px;
  height: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  color: rgba(70, 77, 90, 0.26);
  text-align: center;
  margin: 10px auto;
`;
//회의실 예약 버튼 끝
