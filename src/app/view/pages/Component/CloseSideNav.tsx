import React, { useState } from "react";
import styled from "styled-components";
import Calculate from "../../assets/images/Calculate.svg";
import Order from "../../assets/images/Order.svg";
import Order2 from "../../assets/images/Order2.svg";
import Deposit from "../../assets/images/Deposit.svg";
import Retail from "../../assets/images/Retail.svg";
import Wholesale from "../../assets/images/Wholesale.svg";
import Peed from "../../assets/images/Peed.svg";
import Buying from "../../assets/images/Buying.svg";
import User from "../../assets/images/User.svg";
import Inquiry from "../../assets/images/Inquiry.svg";
import Questionnaire from "../../assets/images/Questionnaire.svg";
import Arcade from "../../assets/images/Arcade.svg";
import NoticeAndBanner from "../../assets/images/NoticeAndBanner.svg";
import Member from "../../assets/images/Member.svg";
import MeetingRoom from "../../assets/images/MeetingRoom.svg";
import Close from "../../assets/images/Close.svg";
import Open from "../../assets/images/Open.svg";
import Logout from "../../assets/images/Logout.svg";
import { useHistory } from "react-router";
import SideNav from "./SideNav";

function CloseSideNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const history = useHistory();
  return (
    <TotalWrapper>
      {isOpen ? (
        <SideNav />
      ) : (
        <SideNavContainer
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <NavLogoAndSlideButton>
            <SlideCheck>
              <SlideButton>{isOpen ? <Close /> : <Open />}</SlideButton>
            </SlideCheck>
          </NavLogoAndSlideButton>
          <BusinessContentWrapper>
            <BusinessContent>
              <Calculate />
            </BusinessContent>
            <BusinessContent>
              <Order />
            </BusinessContent>
            <BusinessContent>
              <Order2 />
            </BusinessContent>
            <BusinessContent>
              <Deposit />
            </BusinessContent>
            <BusinessContentHorizental></BusinessContentHorizental>
          </BusinessContentWrapper>
          <UserContentWrapper>
            <UserContentSpan>사용자</UserContentSpan>
            <UserContent>
              <Retail />
            </UserContent>
            <UserContent>
              <Wholesale />
            </UserContent>
            <UserContent>
              <Peed />
            </UserContent>
            <UserContent>
              <Buying />
            </UserContent>
            <UserContent>
              <User />
            </UserContent>
            <UserContentHorizental></UserContentHorizental>
          </UserContentWrapper>
          <EtcContentWrapper>
            <EtcContentSpan>기타</EtcContentSpan>
            <EtcContent>
              <Inquiry />
            </EtcContent>
            <EtcContent>
              <Questionnaire />
            </EtcContent>
            <EtcContent>
              <Arcade />
            </EtcContent>
            <EtcContent>
              <NoticeAndBanner />
            </EtcContent>
            <EtcContentHorizental></EtcContentHorizental>
          </EtcContentWrapper>
          <CherGroundWrapper>
            <CherGroundContentSpan>기타</CherGroundContentSpan>
            <CherGroundContentMember onClick={() => history.push("/")}>
              <Member />
            </CherGroundContentMember>
            <CherGroundContentMeetingRoom
              onClick={() => history.push("/meetingroom")}
            >
              <MeetingRoom />
            </CherGroundContentMeetingRoom>
            <Version>v.1.21.4</Version>
            <LogoutBox>
              <Logout />
            </LogoutBox>
          </CherGroundWrapper>
        </SideNavContainer>
      )}
    </TotalWrapper>
  );
}
const TotalWrapper = styled.div`
  display: flex;
`;

const SideNavContainer = styled.div`
  width: 56px;
  height: 1060px;
  background-color: #f3f5f9;
  position: relative;
  /* transform: translateX(-60px); */
  transition: all 0.35s;
  /* z-index: 1; */

  @keyframes showSlide {
    from {
      width: 60px;
    }
    to {
      width: 200px;
    }
  }
`;

const NavLogoAndSlideButton = styled.div`
  display: flex;
  height: 66px;
  border-bottom: 1px solid rgba(51, 56, 62, 0.12);
`;

const SlideCheck = styled.div`
  width: 20px;
  height: 20px;
  margin: 24px 21px 0 19px;
  cursor: pointer;
`;

const SlideButton = styled.div``;

const BusinessContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BusinessContent = styled.div`
  width: 168px;
  height: 36px;
  font-size: 16px;
  align-items: center;
  display: flex;
  cursor: pointer;

  :nth-child(1) {
    margin: 22px 16px 10px 0px;
  }
  :nth-child(2) {
    margin: 0 16px 10px 0px;
  }
  :nth-child(3) {
    margin: 0 16px 10px 0px;
  }
  :nth-child(4) {
    margin: 0 16px 10px 0px;
  }
`;
const BusinessContentHorizental = styled.div`
  width: 56px;
  border-bottom: 1px solid rgba(51, 56, 62, 0.12);
`;

const UserContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContentSpan = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 8px 0 0 11px;
`;

const UserContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :first-child {
    margin: 22px 16px 10px 0px;
  }
  :nth-child(2) {
    margin: 0 16px 10px 0px;
  }
  :nth-child(3) {
    margin: 0 16px 10px 0px;
  }
  :nth-child(4) {
    margin: 0 16px 10px 0px;
  }
  :nth-child(5) {
    margin: 0 16px 10px 0px;
  }
  :nth-child(6) {
    margin: 0 16px 10px 0px;
  }
`;

const UserContentHorizental = styled.div`
  width: 56px;
  border-bottom: 1px solid rgba(51, 56, 62, 0.12);
`;

const EtcContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EtcContentSpan = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 8px 0 0 17px;
`;

const EtcContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :nth-child(1) {
    margin: 22px 16px 10px 0px;
  }
  :nth-child(2) {
    margin: 0 16px 10px 0px;
  }
  :nth-child(3) {
    margin: 0 16px 10px 0px;
  }
  :nth-child(4) {
    margin: 0 16px 10px 0px;
  }
  :nth-child(5) {
    margin: 0 16px 10px 0px;
  }
`;

const EtcContentHorizental = styled.div`
  width: 56px;
  border-bottom: 1px solid rgba(51, 56, 62, 0.12);
`;

const CherGroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CherGroundContentSpan = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 8px 0 0 17px;
`;

const CherGroundContentMember = styled.div`
  margin: 0 16px 10px 0px;
  cursor: pointer;
`;

const CherGroundContentMeetingRoom = styled.div`
  margin: 0 16px 10px 0px;
  cursor: pointer;
`;

const Version = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 70px 0 0 8px;
`;

const LogoutBox = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 10px 0 0 20px;
`;

export default CloseSideNav;
