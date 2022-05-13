import React, { useState } from "react";
import styled from "styled-components";
import StarIcon from "../../assets/images/StarIcon.svg";
import DotDotDot from "../../assets/images/DotDotDot.svg";
import RemoveFile from "../../assets/images/RemoveFile.svg";
import FileUpload from "../../assets/images/FileUpload.svg";
import Modal from "app/view/pages/Component/Modal";

function TableMemberList({ member, setUsers }: any) {
  const [openProfileDiv, setOpenProfileDiv] = useState<boolean>(false);
  const [openProfileEditModal, setOpenProfileEditModal] =
    useState<boolean>(false);
  const [openDeleteMemberModal, setOpenDeleteMemberModal] =
    useState<boolean>(false);
  const [profileImg, setProfileImg] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const profileImgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const file: File = e.target.files[0];
      setProfileImg(URL.createObjectURL(file));
      setFileName(file.name);
      e.currentTarget.value = ""; //같은 파일을 올리면 인지못해서 여기서 초기화
    }
  };

  const removeProfileImg = () => {
    setProfileImg("");
    setFileName("");
  };

  return (
    <TableListContainer>
      <MemberListInfo>
        <Member>
          <MemberImg>
            {member.user &&
              (member.user.profileImgUrl ? (
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYYGBgZGBoaHBwYHBgaHBocGBgaGhgaGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHDEhISE0NDE0NDE0NDQxMTQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0MTQ0ND80ND80MTE0NDQ0PzE0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA5EAABAwIEAwcDAwMDBQEAAAABAAIRAyEEBTFBElFhBnGBkaGx8CLB0RMy4RRC8VJykiNigqKyFf/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIhEBAQACAgMAAgMBAAAAAAAAAAECESExAxJBUWEiMnET/9oADAMBAAIRAxEAPwDy00wVPScW6et1GwKUBa6l7Z7TsxTuh9FI3Eg2Mi+/5QwCeAovixv6VM6s2PB0ukKqr2WuLFWWBYH242h3J1p7iscvDlOuWuPkn0wTsuinImLomrQcww8QffxS4J6LG7laalgQsi4ROX4d1R3CBe2ymwuG43tGsmCvRMgyRlP6ov11+WV48zlNkhvZ3s62kOJwBd5rVUxFkxnspGp7Gjg1OBPouE2XHu+eyVo0aCmteuPH3XGKdq0l90oSCcGp7JG7eFwsUjl0BOEpc1yxr2m19vX54LAY/KnsdEHry5+i9Vc1BY/BNe0iO9b+Py3Htnn45k8lcxc4VpM0yIsJdBI+/wA7lRPpkaiF3YZzKcOTLCwMWp1Iw5p6p5amuER3p5zeNLHuCc0Z9QPRAEK0zBstaeiry1T4bvGHnP5VCWpFql4U3hWiERamOapuFcLUBBwLql4UlQZ1gUkJrVKAuF0uALrQnAJzQmCAROEw7nvDWi50UQCvOzD2CqC8xy5IEa+hlPHQArAFwGo/KymJwsP4WOnv1Hf0W8x2IDaRIIMiFQ9nsuL3l7m21B1BWOeONnLXG2Xgd2YyPhAe8X8futgynChpNiwsimLBocwKQclC56Qcg0xXHNSaU4JU0bmpNb+FKGpNap0HA1dJXdlA96qA977rrXIJ9T2TqeITAstlMeF2nVBT3uG0oSEr0w4QRNlic+y3hMjv/lbsDmq7NMM1w+rTuWvj8nrdoyw9nmbmKN7bLS5llW7R4R7qir0i2QQu3HyY5zhy5YXG8psQJptKALVYMvR7kJwo8N40PJOUBauFqmLU3hWzJCWrhapS1cLUBDwpKbhXVQZVqlaowpWBcLq0eGpzQugJwCBogEVgKIe8AxE7mPVQtajcDg3PcABPl90rTkaqpQa1gYxx4TYt4uIAncclpMmwopsACqMtwjaTQDBJ2/haCiyw/wALny8ky6bTC4zdHUneHepH1RsoKbYj/KGxuaMp7Hwj2lQoQzECeSk47wsa7tI3jIIg7cj0votLlVb9RodpZBrmkFO1igbUT+ON0BKRHzouBqidiAN/JNZimzqloJXNshMUwxZENeCnOujQZ3F4sMEExPmq+nnjJ4R4kmPgRXajKnPYXMBc7l3c15VjKVZjiXvcw7Bp9yCnJsrdPX8Lj2u/a4E+3jurOliQbErxfK+1NSmR+p9bf9UDjbtP/d3HlqFvMq7Q06scDmmwkXCMtw5y17nplS4UNKuITnv5JSlYzmO4mON7dVWVw18wPqiYRmfvHFBEctfSFUUnmYkzt81U++WF3F+syx1UeHaeBwNkG5uyt44gTod+vVUT8UAbyLwurxebj/XPn4tVKWLjmJgxjY1lCVsedhC6p5sZ3XPfHRhamlqBZj3bgKVmPbuCFU8uN+ouGU+CeFJD/wBezqkq/wCmP5L1v4Z1lNSNkfx+FKGpBq5LXUQvopqTZXGU5K12SZO3hBI4jyNj4H8p7LSuyrIX1bk8IHPdXeGwraVmnQan7KxxdVrGBrQQ42gi/wCFUPe42OnKAI91y+bO2+sdPix1ParLAVwXgSVoWLK5dUPHHLXl7q+dX5nRTjNQZXdTYvFQIJjy9V5x2oz8l7qdMwdHu3/2jl18tlrsww9Ss0hhItqs1heyMPJfxPv0A53N5Tx1vkrLrgD2ZyN9Z4ILrGSSJET1svW8FQDGBrdAIQWU4JtJga1ob3BWgPCJPqnbsSaNrVuEQqyrjdZKGzvM2sbJP8rEYrPXPMNn5oiS0WyNo/Mm85TqWYtO687dmL7bT19vJdZmFQGZjzKfpU+0etYTEzF1YjS115lkufHiDXHXfbuW+y7GcWvLQSVOtK2Nc1Z/OsgZWB63I2JGmnefNaN/RQPbCDeeu7GU+K7NhAl3jYe4WkyvsoxgBDA2OUfiVeMHSe9GMfbl0ReRFazCFlpBCc5vNGG6gqNS1oMz2tYRT4gCY5GPsspg8UHsmCCNt16PmFHiY4B0SOQPuvLa9N9OqbSJvOvtCnKbh41b4aqdz00VNjaX1O019+as8NW4rb7fPBBZrSIqHrcKcN9Ky12q/wBM+XJOdSKmF+iTnkGwkbq7+kTGfQD2RvKiaXIuu6ZICGY1VjbpnljNlPRJc4iknulog1PbTOqlDEVhsIXuDWrpQflGBL3i1gbr0nB4VrWgAbIHJcsFNkRc6q5othIM32kJD2xaGG/Kd/RVdNw4bfz3nqr3tPhS7hc0aA/lZPFYrgHDuVy5Y32roxynrBuRs4qjiZt3x4rSilxOA91Q9mA6bhh30I8VqeCCjQtWmGphrYgDyQ9ZjQbCSpaTxCGrvumQikF3HuAb6/Ao8O75/KGzOoQ0xuNLTy704Hm/azMeOoQDYfT5a+qo6eKAmQJjz+fNU7tC8se4QYJkHlIEg/N1RYas4kgkkRPctIzrSOzZmzGzEG06kE9JkE7clBis5Dv7QJPkCbNHS2/VU7XnvUVXCvdLmiYF+g5hGyXuCxBJ5ExEHeYHuvR8hxTrBzp4ZG0W1PVeT5TTe17H2hrgfqiNbT0XpmTVg9znCCQRcSNe5LJWPDfYaqCPvou1nDmq7DOdyg/N+SnZUGh7/FZrdD4KOD7KuqNIuPNS03kDTzSNM923tf1TXzGi41/cnu01TCJomyx3aHLm8fEAAe8lbFgPKyrM5phzY4JPMxb1QTDYbDFr+f2QuauP6gHJaluFIbsszn30PB1snZwUvIGq8Jj32UXGXXI/hP45i6hezbRESh3MGyKqvbpF+YQb2kXBtKNJy4dhJd4kk9pXr8sIsQr/ACDLeD6iLor9MEiVZ0mwLLrZJ2hdovl3co67w1qWBswnmgG5i+0LzTtK/wD60WsATG0re5jiAA5xOgXl2KxTX1Xvu4l3QCNr6n0UU277JO/6ZvuPZaZrpCy3Zk/Rbvt/krR06p6fZZXtpE9Jyjc6XJjqqjFWHXUqG0X2+fdQ4wCJmLaTz7v5701lYOOkztrPfCExmItpfbW/d8CcKvPu0VPhe4ncnXpB8Fniz90CIOnrdbXN8K18RHiPaPc81lsZhQ0yCSPFXKmxUnXwKIw7S51tenUrtTCmQTNzF+4adbo6nQDDGh1tuBznmqKRYZcWND21GB5LDwuBgtcQIuNQOXU3V5kbjTeAHSHcjF4EiSOUhUjIcSSNdgIiZ07vwrXCOeDw8TYBBnhHFbS97HnY2U2nI3dKsANL7C5PeOl0Y3EGYIA7/uqHCOMDiMxcja+/0gWttOis6LmCIHqY8CdVmsfUeCLJrHLnEwWET3yfFdZdFOCKblK96ELuFPFWdvneEFUzVBiGcQiE4HnCaXX/AJhMlbicPwgXA71ks/wrnn6QTHIWW1x8BhJLu7VZ1+ciiQS36XGD0TLntlRk9fak4hcfhSBHCQd+hWxrdrAAeBnFygKrw2ZPrPc79NrXt0B3nmp9T9rPjPtwrz/YfJBYnBPDRA4b6ErVZlm2KosLzSpADv8AwqTNsY+sxpe1odr9Kcxk5Tcrfiq/QdzHmkm/087lcQWnp9MKyphV9AaKzprpQDzB8kNG6Lq/QwNHL/KDpDjqE7NT8c/0SoZfthjuCg4DU2HesJlWBc89GguPQD4Fou1VX9SoGDRv+PyhaVZtCm+dXgN7xqft5Kdm0vZZojVvhIK0hcAeSwfZfNWucRwtB/2kmOfFMLZCuDossu2mNPrVOqY14JErj28QQ9WzeqlY59djRA8f8c+nVV2JqSLN0uLGfTS32UX6rRd0lMq4okfTbYDv1+HmUFpXY1siYgQYO8xMTeNRdUWNokkeMDXU7DW91c4t9rmTB+nab2HP28lSYzFNBPO3j6TqriaGrYchp5TMg6Xgu/5EDxRLmh7eIRMC2oAvpzE/boq6rTfXMTDRe5iwG5PefNDhxpfSHiBYibap8k0DGFukc53JgG//ACGmzgrHCAGLlpAk2ILZmQD4W+Tm8NnbbAkA6SDyuASrrCYuf7tyYPQSNO4jySONXQIkQ8X3Bs4xeduR2VlS0/cIFjMg6/ybrO4d4MxIAAjcAC/mPsrPDlxa08W0j4R88VC1q0uGrp6CEWx8xJt4qvokky7/AD6o0vkfPsgCHU+Pf0UbmAGLpUHxv+VzUyghLGHb0/CQ6rrKg0PzuK6ddE4SLHhvAQ6NNyshmtJsMMSA8LV5rScWW8gCVls7YRRJEyCDfmCqvSZR5w7Y+loFlUYZ/BXfOwB8kThK+IcB9AFtSVFUwz/1yXR9TDp0ULy6VGf5695LA0cGxVF/UvO3TRdq4epVe9lO7xMX5ErWdmKcUA17RxNJBmJmd05dRE57ZJtap/p/9Skt/wDpDkEkvY/UfhRojXuhhKDwg0ROM/aANyAupkZgmwwuP91/BVmaYnhaTzVtiHQ2BsIWUzmtJIGwnx2U5URnz9T3OPP2VTnRJvsFd0KchAZ3hwxgnVzhHgpUr8pJY8OGpOzgO/db/AYlzgOM/PBVHZjIHOLXESCLSIjwPetVjcq4bgW7lGSsTWOhR4qAe8LrCIjdMxIkKGirqgzrCHrYjhbAsAdRr4omq6bIGuwxqjZ6VGZ4st4pIO+u0aT4D5Kzn9K+qeIkxNp2V5jMLxvA1A167zPcrOlhWnhAERaepE25bK5WdjP4NnBpwzuTE+twrF+ZPLeCBJm4A0mYAAsjxl0fVN7aCIcB9Q5wPuU04ANEmLl2hIJAmwjS0jyT2WmbxGEDwLQb30J3kz8ulhWVGXbLum/WBvqtdhsvAgEm8E2iSY1voIjouYnCNIILYM2IvGkzzBgfAlsaQ5dmMkQ7l6WPt6LQ4bEkAgGdx18fL0WPGFNN3E3XTuOk31Vjg8U/SNB/P8KLWkjXNxcQSB4x7/dRsxZe4ADxHy6oWPe8i9r+sK8wNMNAKW1aXDHGAPZHsIjRVdKoJlHNxTW6z4T9k00a1qlpsKDw1XjIAEjrKuKdKFURQ9ZnE0hZDO6LhSfI0ErbVGLOdoaH0PjThNkyUmV4svYP9qbXcf1mA9QqXL8xexohhMJ781L6rHEAQTKjS7eBNHI2U6jnskOJJnvMoluCifqN7lMrZq2TdQOzYcz5J6iBn9N1PmuID/8AVHXySRqDdanChEPu8dBPj8lQ4UKQO/c7mbdwt9l0sw2PqwJ5BZTFun/yKu80qT9PNUdep9cDawHU3WeVVI5RYGgk7Sp8oyGpiaoe8EMboI89VfZJ2fLwHVbAmeHp1WvpUWsENAAU2nozB4FjAAGiwhOxVJrhHNOcVC9ylUjK5jg+AlAfr7FazHYXibostjcPwGDzUrgWqwFBPw+oTqzyNFxmKB1SqoDGEgz8upnU421+fO9Fiq1I1G7pbo9QvHxPOt9fO/suDU9YnfkZ9D5owlhuFHUDUXITFG0EwJMAHTqTKT2SPGfypG1AF11QWS9h6hnYbiMn58hSMw0bJlTFAboc5nJskrS1ptDblTPxo0AVM2oXXJlF4alN1WiXGHrOKmwrnudBJjbVS4DDK6wuBvxWVSItF5fTDQOatGPBQNIRZFtKqJp71X4+iHsIPJHhRVUbJg24NrC4BRjCsH9oV7m+DvxN8VTPpuGl1NNF+kwf2pjqbf8ASFI5p3THvCJuldG/ot/0pKvq52xpI5Lqr1qdtZRdDT87lyq7hb4JlN0gdT7IbM68N+aalb28IVGOxFyQOImzQLkq47Mdny2KlUS/WDcCd+9D9mMC6o81XCG6NmdFtWCNlja0h7GgJEpcSa56lTlRyFfW2Tqr0E6pcbJGsWNkKmznCS09Fa4erITMawESeRQbzrEggoPorXH04ce/0+BUtR8A96FGOeRPNDV67uZXX1RF0LXrAXSCfD5i6bnpCNbjTHRZ1lX6lYNdZKxcG1se7ZROzAkeCFfdca1SZF7ibkoigxRsYjMNTkoXIKoUytHlODJOmiHw2UugStFlZ4XBu8eieNZZ46H4OjAsrAgNCho6lKpV1CtklY9EsKr6Tro2mUwnTXiy6CkShKsxjJBCzGIDgTyWvxLJWUzunwS4wBumSufUG5VBn2chg4WOBd7KrzvPnPljLAb81mn1CSZ81eOP1FqWrjSSSd0kF+meaSradvdsO2PBAvwpr1OH+2fq7htruVZUGSO9W2DoBgEAIzvxUS4WgGNDQAABspwmhJZLOJhRueuF6gqvUqQ4mpCrTWBd81KmxdUAEm/zmgspp8TuM80KaPCMho5qHHPsfFTmoI7lnu0eYCmzUSYHrdMRQ5oSb9T/AAVRV2QIV7TrioyRylVdZt1nby2mPCmq00O6iDqrulhS9wAEknRXLez7GCXOtDuIjWdg3awSlouow36IB0UrXq+xeSO4jwNJbEidYBgaa2BQZyapMBjiYnTZGxIry9SNTxhHTEGUfhsoqO0YUbh+oagyVrMhyz+9w7gllXZ4g8T7RstMymBtoptWjcyBZdYTII5iVI8WTKYSlFm4tMO/iPSfb4ULj3wT85qTD2HmhM5foVtvhzWcicM+deSsqblT4CoYEq1puTiaJBTiZUbSnEqko6jVQZ7gw9j23uNtfBaBwQWJpkgoJ8/53QdTeW7TrefZVH6i3nbbL4qOJDQD1HqFiq2FjdadoofjSTv6dJLguH0jhqAAjkigYUbU4uU2rOhcJXHFRl/JSZz38tUFiHwJPkpn1dhf0Qdd08pPT2SUqMzqiIGpi5RuUjhYqvMNWz8KPo1Q1mu35QvXA+viIHr+Fgs8e7FV/wBNhJDLEjSSLnwRWf57whzGH6jYdNkT2XwnAzjd+51z4qcstNMMd9gsPlVTDN1L2jXmPyE40OO7LzyWu4AUPh8Axjy8CJ15TzjZRjN1eVmMCZVlwpfU79x9PwVZnKw+8ujlMD2UPFLvHxHervC1AB4KuLwib1tUfpcB4D4HmOq66k7hIAHf3jQ9LeqKzAgieV1zBvDrGI1v870j19CYfCMBHExvFzjUqxbTA5KDGxFu9PpVOJoPRTZpWPPabhXC1NDl0lJRrmqB4hEcSgqJKdZiAD3+4Q+b1JiFDjTDCRqL+SCq4oPg7QPVXjlxpjnjztaYF/0iT8lXNN6p8NTEA9R6+xVpSsFpGGXY1jlK0oWm6/4U8hUinPUNRTEqNzfNUTCducu46ZcGyQOmnSV5DiTH03BB0X0PmmHD2OB3B+dF4j2jwL6VVwdpNu7YTonLwVZ3iPMrqn4kkbTt9It/KQSSSW67TwUDkklJkzdBVf3FcSSUocx/cO8/ZOxn7fBvskklfrSPNKriaxkz9Z/+ivTsu/Y3uSSWefxrh9WTv2ptT9ngkkqxR5ENDVvzZWrNEkkKn9QmJ37iuYHTw+64kp+q+H4nQ9ybhj9A+c1xJGXRQXQ0TkklM7WTVHVXUlNOAcV+09yz2V/sCSSvFOfTS4DTxPsFbU/wupLadOXLsU1OakkmhKdlx2qSSZBMRovOe3NJvGLDTkOS6kj4nLp5q8XSSSQh/9k=" />
              ) : (
                member.user.name.slice(1)
              ))}
          </MemberImg>
          <MemberName>{member.user && member.user.name}</MemberName>
          {member.isLeader === true && (
            <IconBox>
              <StarIcon />
            </IconBox>
          )}
        </Member>
        <Member>
          {member.user &&
            (member.user.position ? member.user.prosition : "직책없음")}
        </Member>
        <Member>
          {member.user && (member.user.job ? member.user.job : "직무없음")}
        </Member>
        <Member>
          {member.user.groups &&
            member.user.groups.map((group: any) => {
              return (
                <Group key={group.id}>
                  {group.name ? group.name : "그룹없음"}
                </Group>
              );
            })}
        </Member>
        <Member>{member.user.phoneNumber}</Member>
        <Member>{member.user.email}</Member>
        <Member onClick={() => setOpenProfileDiv(!openProfileDiv)}>
          <DotDotDot />
        </Member>

        {openProfileDiv && (
          <ProfileDiv>
            <EditProfile>
              <EditProfileSpan
                onClick={() => setOpenProfileEditModal(!openProfileEditModal)}
              >
                프로필 수정
              </EditProfileSpan>
              {openProfileEditModal && (
                <Modal width="398px" height="293px" margin="0 0 700px -800px">
                  <EditProfileContainer>
                    <EditProfileTitle>프로필 수정</EditProfileTitle>
                    <ProfileImg>
                      {profileImg ? (
                        <LoadProfileImg>
                          {profileImg && <img src={profileImg} />}
                        </LoadProfileImg>
                      ) : (
                        <NoneProfileImgSpan>
                          {member.user.name.slice(1)}
                        </NoneProfileImgSpan>
                      )}
                    </ProfileImg>
                    <ProfileImgInputWrapper>
                      <FileUrl>{fileName}</FileUrl>
                      {profileImg && (
                        <RemoveFileIconBox onClick={() => removeProfileImg()}>
                          <RemoveFile />
                        </RemoveFileIconBox>
                      )}
                      <FileUploadIconBox>
                        <FileUploadInput
                          type="file"
                          id="file-uploader"
                          name="file-uploader"
                          onChange={profileImgHandler}
                        ></FileUploadInput>
                        <FileUploadLabel htmlFor="file-uploader">
                          <FileUpload />
                        </FileUploadLabel>
                      </FileUploadIconBox>
                    </ProfileImgInputWrapper>
                    <ButtonWrapper>
                      <EditProfileColseButton
                        onClick={() => {
                          setOpenProfileEditModal(false);
                        }}
                      >
                        <Close>취소</Close>
                      </EditProfileColseButton>
                      <EditProfileAddButton
                        style={{
                          background: profileImg
                            ? "#333840"
                            : "rgba(70, 77, 90, 0.12)",
                        }}
                        onClick={() => {
                          if (!profileImg) {
                            alert("이미지를 등록해주세요");
                          }
                        }}
                      >
                        <Add
                          style={{
                            color: profileImg
                              ? "#ffffff"
                              : " rgba(70, 77, 90, 0.26)",
                          }}
                        >
                          확인
                        </Add>
                      </EditProfileAddButton>
                    </ButtonWrapper>
                  </EditProfileContainer>
                </Modal>
              )}
            </EditProfile>
            <DeleteMember>
              <DeleteMemberSpan
                onClick={() => {
                  setOpenDeleteMemberModal(!openDeleteMemberModal);
                }}
              >
                구성원 삭제
              </DeleteMemberSpan>
              {openDeleteMemberModal && (
                <Modal width="398px" height="202px" margin="0 0 700px -800px">
                  <DeleteMemberContainer>
                    <DeleteMemberTitle>구성원 삭제</DeleteMemberTitle>
                    <DeleteMemberWarning>
                      {member.user.name} 구성원을 {member.user.group}에서
                      삭제하시겠습니까?
                    </DeleteMemberWarning>
                    <ButtonWrapper>
                      <DeleteMemberColseButton
                        onClick={() => {
                          setOpenDeleteMemberModal(false);
                        }}
                      >
                        <Close>취소</Close>
                      </DeleteMemberColseButton>
                      <DeleteMemberButton>
                        <Delete>삭제</Delete>
                      </DeleteMemberButton>
                    </ButtonWrapper>
                  </DeleteMemberContainer>
                </Modal>
              )}
            </DeleteMember>
          </ProfileDiv>
        )}
      </MemberListInfo>
    </TableListContainer>
  );
}

const TableListContainer = styled.div`
  border-top: 1px solid rgba(51, 56, 64, 0.12);
  height: 52px;
  align-content: center;
`;

const MemberImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 64px;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.15px;
  color: #f3f5f9;
  background-color: #8e99ab;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const MemberName = styled.div`
  width: auto;
  height: 20px;
  margin-left: 20px;
`;

const IconBox = styled.div`
  width: 14px;
  height: 13px;
`;

const MemberListInfo = styled.div`
  display: flex;
`;

const Member = styled.div`
  height: 36px;
  background-color: #ebeff5;
  text-decoration: none;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.1px;
  margin-top: 8px;
  background-color: #ffffff;
  color: rgba(44, 50, 61, 0.87);
  text-align: center;

  :first-child {
    display: flex;
    width: 160px;
  }
  :nth-child(2) {
    width: 200px;
  }
  :nth-child(3) {
    width: 120px;
  }
  :nth-child(4) {
    height: 20px;
    display: flex;
    margin-top: 15px;
    width: 180px;
  }
  :nth-child(5) {
    width: 180px;
  }
  :nth-child(6) {
    width: 250px;
  }
  :nth-child(7) {
    width: 60px;
  }
`;

const Group = styled.div`
  /* display: flex; */
  width: fit-content;
  height: fit-content;
  background-color: #ebeff5;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: rgba(44, 50, 61, 0.87);
  margin: 0 auto;
`;

//프로필 수정, 구성원 삭제 Div
const ProfileDiv = styled.div`
  width: 110px;
  height: 72px;
  position: absolute;
  top: 240px;
  left: 1400px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
  z-index: 1;
`;

const EditProfile = styled.div`
  width: 110px;
  height: 36px;
`;

const EditProfileSpan = styled.div`
  width: 110px;
  height: 36px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  margin-top: 7px;
  color: rgba(44, 50, 61, 0.87);
`;

const DeleteMember = styled.div`
  width: 110px;
  height: 36px;
  background: rgba(74, 110, 177, 0.08);
`;

const DeleteMemberSpan = styled.div`
  width: 110px;
  height: 36px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  margin-top: 7px;
  color: rgba(44, 50, 61, 0.87);
`;

//프로필 수정 모달
const EditProfileContainer = styled.div``;

const EditProfileTitle = styled.div`
  width: 351px;
  height: 32px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.15px;
  margin-left: 24px;
  color: rgba(44, 50, 61, 0.87);
`;

const ProfileImg = styled.div`
  width: 60px;
  height: 60px;
  margin-left: 24px;
  border-radius: 64px;
  background-color: #8e99ab;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ProfileImgInputWrapper = styled.div`
  width: 350px;
  height: 55px;
  display: flex;
  background-color: #ebeff5;
  border-radius: 4px;
  margin: 16px 0 0 24px;
`;

const LoadProfileImg = styled.div`
  content: "";
`;

const NoneProfileImgSpan = styled.div`
  margin-left: 15px;
  color: #f3f5f9;
  font-size: 16px;
  font-weight: 500;
  line-height: 60px;
  letter-spacing: 0.15px;
`;

const FileUrl = styled.div`
  display: inline;
  width: 300px;
  height: 20px;
  margin: 18px 0 0 12px;
  overflow: hidden;
`;

const RemoveFileIconBox = styled.div`
  width: 24px;
  height: 24px;
  margin: 18px 0 0 12px;
  cursor: pointer;
`;

const FileUploadIconBox = styled.div`
  width: 24px;
  height: 24px;
  margin: 20px 0 0 10px;
`;

const FileUploadInput = styled.input`
  display: none;
`;

const FileUploadLabel = styled.label``;

const ButtonWrapper = styled.div`
  display: flex;
  width: 398px;
  height: 98px;
`;

const EditProfileColseButton = styled.div`
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

const EditProfileAddButton = styled.div`
  width: 120px;
  height: 42px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin: 32px 24px 24px 0px;
  background-color: rgba(70, 77, 90, 0.12);
  border-radius: 4px;
  cursor: pointer;
`;

const Add = styled.div`
  width: 29px;
  height: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  margin: 10px auto;
`;

//구성원 삭제 모달
const DeleteMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DeleteMemberTitle = styled.div`
  width: 351px;
  height: 32px;
  margin: 0 24px 0 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const DeleteMemberWarning = styled.div`
  width: 351px;
  height: 24px;
  margin: 24px 0 10px 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: rgba(44, 50, 61, 0.87);
`;

const DeleteMemberColseButton = styled.div`
  width: 120px;
  height: 42px;
  margin: 32px 12px 24px 122px;
  background-color: #ffffff;
  border: 1px solid #333840;
  border-radius: 4px;
  cursor: pointer;
`;

const DeleteMemberButton = styled.div`
  width: 120px;
  height: 42px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  margin: 32px 24px 24px 0px;
  background: #333840;
  border-radius: 4px;
  cursor: pointer;
`;

const Delete = styled.div`
  width: 29px;
  height: 26px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  text-align: center;
  color: #ffffff;
  margin: 10px auto;
`;

export default TableMemberList;
