import React from "react";
import styled from "styled-components";

function Pagination({ total, limit, page, setPage }: any) {
  const numPages = Math.ceil(total / limit); //총 페이지 수 / 한 페이지 당 노출 수 (ceil은 올림함수)

  return (
    <>
      <Nav>
        <button onClick={() => setPage(page - 1)} disabled={false}>
          &lt;
        </button>
        {Array(numPages) //페이지 수를 배열로
          .fill([]) // 시작점부터 끝점까지 value값을 채움
          .map((_, i) => (
            // tslint:disable-next-line: no-use-before-declare
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null} //페이지 가리기
            >
              {i + 1}
            </Button>
          ))}
        <button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.div`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rm;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    //페이지 번호에 현재 위치 나타냄
    background: deeppink;
    font-weight: 700;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
