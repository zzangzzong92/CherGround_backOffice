import React, { useEffect, useState } from "react";
import styled from "styled-components";

function MemberList() {
  const [posts, setPosts] = useState([]); //총 게시물
  const [limit, setLimit] = useState(10); //한 페이지당 노출될 게시물 수
  const [page, setPage] = useState(1); //페이지 번호
  const offset = (page - 1) * limit; //첫 게시물의 위치(index) (페이지번호 - 1) * 한 페이지에 노출되는 게시물 수

  useEffect(() => {
    fetch("http://localhost:3000/public/data/MemberList.json", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((userList) => {
        setPosts(userList);
      });
  }, []);

  return (
    <Layout>
      <header>
        <h1>구성원 정보</h1>
      </header>

      <main>
        {posts.slice(offset, offset + limit).map(({ id, name, position }) => (
          <article key={id}>
            <h3>
              {name}, {position}
            </h3>
          </article>
        ))}
      </main>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default MemberList;
