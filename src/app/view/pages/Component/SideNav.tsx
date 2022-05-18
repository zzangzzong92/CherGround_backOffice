import React, { useState, Children } from "react";
import styled from "styled-components";
import Cherground from "../../assets/images/Cherground.svg";
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
import { useHistory } from "react-router";
import CloseSideNav from "./CloseSideNav";

// interface RenderPageProps

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <TotalWrapper>
      {isOpen ? (
        <CloseSideNav />
      ) : (
        <SideNavContainer>
          <NavLogoAndSlideButton>
            <CompanyLogo>
              <Cherground />
            </CompanyLogo>
            <SlideCheck onClick={() => setIsOpen(!isOpen)}>
              <SlideButton>{isOpen ? <Open /> : <Close />}</SlideButton>
            </SlideCheck>
          </NavLogoAndSlideButton>
          <BusinessContentWrapper>
            <BusinessContent>
              <Calculate />
              정산
            </BusinessContent>
            <BusinessContent>
              <Order />
              주문
            </BusinessContent>
            <BusinessContent>
              <Order2 />
              주문
            </BusinessContent>
            <BusinessContent>
              <Deposit />
              예치금
            </BusinessContent>
            <BusinessContentHorizental></BusinessContentHorizental>
          </BusinessContentWrapper>
          <UserContentWrapper>
            <UserContentSpan>사용자</UserContentSpan>
            <UserContent>
              <Retail />
              소매업체
            </UserContent>
            <UserContent>
              <Wholesale />
              도매업체
            </UserContent>
            <UserContent>
              <Peed />
              피드
            </UserContent>
            <UserContent>
              <Buying />
              사입
            </UserContent>
            <UserContent>
              <User />
              사용자
            </UserContent>
            <UserContentHorizental></UserContentHorizental>
          </UserContentWrapper>
          <EtcContentWrapper>
            <EtcContentSpan>기타</EtcContentSpan>
            <EtcContent>
              <Inquiry />
              문의
            </EtcContent>
            <EtcContent>
              <Questionnaire />
              설문지
            </EtcContent>
            <EtcContent>
              <Arcade />
              상가
            </EtcContent>
            <EtcContent>
              <NoticeAndBanner />
              공지&배너
            </EtcContent>
            <EtcContentHorizental></EtcContentHorizental>
          </EtcContentWrapper>
          <CherGroundWrapper>
            <CherGroundContentSpan>쉐어그라운드</CherGroundContentSpan>
            <CherGroundContent
              onClick={() => {
                history.push("/");
              }}
            >
              <Member />
              내부 구성원
            </CherGroundContent>
            <CherGroundContent
              onClick={() => {
                history.push("/meetingroom");
              }}
            >
              <MeetingRoom />
              회의실
            </CherGroundContent>
            <Version>v.current</Version>
            <Logout onClick={() => history.push("/signin")}>로그아웃</Logout>
          </CherGroundWrapper>
        </SideNavContainer>
      )}
    </TotalWrapper>
  );
}
const TotalWrapper = styled.div`
  display: flex;
  user-select: none;
`;

// const RenderPage = styled.div``;

const SideNavContainer = styled.div`
  width: 200px;
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

const CompanyLogo = styled.div`
  margin: 14px 0 13px 28px;
`;

const NavLogoAndSlideButton = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(51, 56, 62, 0.12);
`;

const SlideCheck = styled.div`
  width: 20px;
  height: 20px;
  margin: 24px 12px 19px 70px;
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
    margin: 22px 16px 10px 16px;
  }
  :nth-child(2) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(3) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(4) {
    margin: 0 16px 10px 16px;
  }
`;
const BusinessContentHorizental = styled.div`
  width: 168px;
  margin-left: 16px;
  border-bottom: 1px solid rgba(51, 56, 62, 0.12);
`;

const UserContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserContentSpan = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 8px 0 0 32px;
`;

const UserContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :first-child {
    margin: 22px 16px 10px 16px;
  }
  :nth-child(2) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(3) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(4) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(5) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(6) {
    margin: 0 16px 10px 16px;
  }
`;

const UserContentHorizental = styled.div`
  width: 168px;
  margin-left: 16px;
  border-bottom: 1px solid rgba(51, 56, 62, 0.12);
`;

const EtcContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EtcContentSpan = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 8px 0 0 32px;
`;

const EtcContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :nth-child(1) {
    margin: 22px 16px 10px 16px;
  }
  :nth-child(2) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(3) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(4) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(5) {
    margin: 0 16px 10px 16px;
  }
`;

const EtcContentHorizental = styled.div`
  width: 168px;
  margin-left: 16px;
  border-bottom: 1px solid rgba(51, 56, 62, 0.12);
`;

const CherGroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CherGroundContentSpan = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 8px 0 0 32px;
`;

const CherGroundContent = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  :nth-child(1) {
    margin: 22px 16px 10px 16px;
  }
  :nth-child(2) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(3) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(4) {
    margin: 0 16px 10px 16px;
  }
  :nth-child(5) {
    margin: 0 16px 10px 16px;
  }
`;

const Version = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 70px 0 0 32px;
`;

const Logout = styled.div`
  font-size: 12px;
  color: rgba(44, 50, 61, 0.6);
  margin: 10px 0 0 32px;
  cursor: pointer;
`;

export default SideNav;
