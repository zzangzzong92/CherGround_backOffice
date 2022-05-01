import React from "react";
import styled from "styled-components";

interface Props {
  setSelected: string;
  setIsActive: boolean;
}

export default function SortDropDownContent(props: Props) {
  return (
    <div>
      <Content
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.preventDefault();
          setSelected(props.option);
          setIsActive(false);
        }}
      >
        {option}
      </Content>
    </div>
  );
}
const Content = styled.div`
  width: 154px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.15px;
  cursor: pointer;

  :nth-child(2) {
    background-color: rgba(74, 110, 177, 0.08);
  }
`;
