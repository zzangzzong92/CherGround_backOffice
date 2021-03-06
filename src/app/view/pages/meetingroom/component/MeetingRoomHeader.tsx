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
  const [openSearchAttendeesDiv, setOpenSearchAttendeesDiv] =
    useState<boolean>(false);
  const [selectMeetingRoom, setSelectMeetingRoom] = useState<string>("");
  const [checkedTime, setCheckedTime] = useState<string>();
  const [checkAM, setCheckAM] = useState<string[]>([
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

  const [checkPM, setCheckPM] = useState<string[]>([
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
  const [clickMeetingTime, setClickMeetingTime] = useState<string[]>([]);
  const [dateCheckedBcco, setDateCheckedBcco] = useState<string>("#ffffff");
  const [buttonState, setButtonState] = useState(); //??????????????????

  //date-picker
  //????????????
  const [startDate, setStartDate] = useState(new Date());

  const [openDatePicker, setOpenDatePicker] = useState<boolean>(false);
  const [openTimePicker, setOpenTimePicker] = useState<boolean>(false);

  let today = new Date();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  let koDay = ["???", "???", "???", "???", "???", "???", "???"];
  let weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  let dayOfWeek = koDay[new Date().getDay()];
  let dateString = month + "." + date + "(" + dayOfWeek + ")";

  const CustomInput = forwardRef(
    ({ value, onClick }: any, ref: React.ForwardedRef<HTMLInputElement>) => (
      <div onClick={onClick} ref={ref}>
        {value}
      </div>
    )
  );

  const place = ["???? ?????? ?????????", "???? ?????? ?????????", "???? ?????? ?????????"];

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

  const clickClock = (
    clickclock: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setCheckedTime(clickclock);
    const meetingTime = [];
    meetingTime.push(clickclock);
    setClickMeetingTime(meetingTime);
    console.log("event", e);
    console.log("click", clickclock);
  };

  const clickOfficeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const newAM = [...checkAM.slice(20)];
      setCheckAM(newAM);
      const newPM = [...checkPM.slice(0, 14)];
      setCheckPM(newPM);
    } else if (!e.target.checked) {
      setCheckAM([
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
      setCheckPM([
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
    }
  };

  const addAttendeeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <MeetingRoomHeaderContainer>
      <CalendarSelectWrapper>
        <CalendarDate>
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            locale={ko}
            dateFormat={"MM???" + "dd???" + "E??????"}
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
                    {date.getMonth() + 1}???, {date.getFullYear()}???
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
                <DatePickerClose>??????</DatePickerClose>
              </DatePickerCloseButton>
              <DatePickerSelectButton>
                <SelectDate>??????</SelectDate>
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
          ????????? ????????????
        </ReservationSpan>
        {openReservation && (
          <MeetingRoomReservationModal
            width="434px"
            height="469px"
            margin="-400px 100px 50px -700px"
          >
            <ReservationMeetingRoomContainer>
              <ReservationMeetingRoomSpan>
                ????????? ??????
              </ReservationMeetingRoomSpan>
              <MeetingTextWrapper>
                <MeetingName>?????? ??????</MeetingName>
                <MeetingNameInput
                  // onChange={SearchHandler}
                  type="text"
                  placeholder="???????????? ????????? ????????? ??????????????????."
                  // onChange={handleAddMemberInput}
                ></MeetingNameInput>
              </MeetingTextWrapper>
              <SelectMeetingRoom
                onClick={() =>
                  setOpenSelectMeetingRoomDrop(!openSelectMeetingRoomDrop)
                }
              >
                <SelectMeetingRoomSpan>
                  {selectMeetingRoom ? selectMeetingRoom : "????????? ??????"}
                </SelectMeetingRoomSpan>
                <IconBox>
                  {openSelectMeetingRoomDrop ? <ArrowUp /> : <ArrowDown />}
                </IconBox>
              </SelectMeetingRoom>
              {openSelectMeetingRoomDrop && (
                <KindOfMeetingRoom>
                  <MeetingRoomContent onClick={HQMeetingRoom}>
                    <Content>???? ?????? ?????????</Content>
                  </MeetingRoomContent>
                  <MeetingRoomContent onClick={LapsMeetinRoom}>
                    <Content>???? ?????? ?????????</Content>
                  </MeetingRoomContent>
                  <MeetingRoomContent onClick={LapsPhone}>
                    <Content>???? ?????? ?????????</Content>
                  </MeetingRoomContent>
                </KindOfMeetingRoom>
              )}
              <MeetingRoomTime>
                <MeetingRoomTimeSpan>
                  <TimeSpan>?????? ??????</TimeSpan>
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
                                {date.getMonth() + 1}???, {date.getFullYear()}???
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
                            <DatePickerClose>??????</DatePickerClose>
                          </DatePickerCloseButton>
                          <DatePickerSelectButton>
                            <SelectDate>??????</SelectDate>
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
                    <TimeSelectSpan>
                      {checkedTime ? checkedTime : "?????? ??????"}
                    </TimeSelectSpan>
                    <TimeSelectIconBox>
                      {openTimePicker ? <ThinArrowUp /> : <ThinArrowDown />}
                    </TimeSelectIconBox>
                    {/* </TimeSelect> */}
                  </TimePicker>
                  {openTimePicker && (
                    <DateSelectBox>
                      <DateSelectTop>
                        <DateSelectTitle>?????? ??????</DateSelectTitle>
                        <OfficeHourButton>
                          <SortButton
                            type="checkbox"
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              clickOfficeTime(e);
                            }}
                          ></SortButton>
                          <SortButtonSpan>??????????????? ??????</SortButtonSpan>
                        </OfficeHourButton>
                      </DateSelectTop>
                      <DateSelectMiddle>
                        <AllTimeButtonWrapper>
                          <AMDiv>
                            <AMSpan>??????</AMSpan>
                            <AMTimeWrapper>
                              {checkAM.map((amtime) => (
                                <TimeDiv
                                  key={amtime}
                                  onClick={(e) => clickClock(amtime, e)}
                                >
                                  <TimeDivSpan>{amtime}</TimeDivSpan>
                                </TimeDiv>
                              ))}
                            </AMTimeWrapper>
                          </AMDiv>
                          <PMDiv>
                            <PMSpan>??????</PMSpan>
                            <PMTimeWrapper>
                              {checkPM.map((pmtime) => (
                                <TimeDiv
                                  key={pmtime}
                                  onClick={(e) => {
                                    clickClock(pmtime, e);
                                  }}
                                >
                                  <TimeDivSpan>{pmtime}</TimeDivSpan>
                                </TimeDiv>
                              ))}
                            </PMTimeWrapper>
                          </PMDiv>
                        </AllTimeButtonWrapper>
                      </DateSelectMiddle>
                      {clickMeetingTime &&
                        clickMeetingTime.map((time: string) => (
                          <ReservedContentSpanBox>
                            ??? {time}?????? {time}?????? ??????
                          </ReservedContentSpanBox>
                        ))}
                      <DateSelectButtonWrapper>
                        <DateSelectCloseButton
                          onClick={() => {
                            setOpenTimePicker(false);
                          }}
                        >
                          <DateSelectClose>??????</DateSelectClose>
                        </DateSelectCloseButton>
                        <DateSelectOkButton
                          onClick={() => {
                            setOpenTimePicker(!openTimePicker);
                            false;
                          }}
                          style={{
                            background: checkedTime
                              ? "#333840"
                              : "rgba(70, 77, 90, 0.12)",
                          }}
                        >
                          <DateSelectOk
                            style={{
                              color: checkedTime
                                ? "#FFFFFF"
                                : "rgba(70, 77, 90, 0.26)",
                            }}
                          >
                            ??????
                          </DateSelectOk>
                        </DateSelectOkButton>
                      </DateSelectButtonWrapper>
                    </DateSelectBox>
                  )}
                </TimeWrapper>
                <AttendeeBox>
                  <AddAttendeeTag></AddAttendeeTag>
                  <AttendeeSpan>?????????</AttendeeSpan>
                  <AttendeeInput
                    type="text"
                    placeholder="????????? ??????, ????????? ??????????????????."
                    // onChange={}
                  ></AttendeeInput>
                  {/* {openSearchAttendeesDiv && (
                  )} */}
                </AttendeeBox>

                <ButtonWrapper>
                  <CloseButton
                    onClick={() => {
                      setOpenReservation(false);
                    }}
                  >
                    <Close>??????</Close>
                  </CloseButton>
                  <ReservationButton>
                    <Reservation>??????</Reservation>
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

//????????? ??? ??????
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

//?????? ??????
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

//????????? ?????? ??????
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

//?????? ?????? - ?????? ??????
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
  cursor: pointer;
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

//?????? ?????? ??????
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

//?????????
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

//????????? ?????? ??????/?????? ??????
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
//????????? ?????? ?????? ???
