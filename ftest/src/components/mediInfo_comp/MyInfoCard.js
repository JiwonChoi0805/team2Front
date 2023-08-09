import React from "react";
import styled from "styled-components";
//image
import lowbtn from '../../pages/images/lowbtn.png';
const MyInfoCard=()=>{
    return(
        <>
        {/* <ExWrapper>내려서 상세보기</ExWrapper>
            <BtnWrapper>
            
            <button >
            <img src={lowbtn} alt=""></img>
            </button>
            </BtnWrapper> */}
        <BoxWrapper>

            <ContentWrapper>
                <NameWrapper>정대만</NameWrapper>
                남/2000.05.22
                <br></br>
                000522-3121212
                <br></br>
                A형/Rh+
                <br></br>
                184cm/70kg
                <br></br>
                000-0000-0000
                <br></br>
                서울특별시 서대문구 성산로 508

            </ContentWrapper>
            <TitleWrapper>
                이름
                <br></br>
                성별/생년월일
                <br></br>
                주민번호
                <br></br>
                혈액형
                <br></br>
                키/체중
                <br></br>
                연락처
                <br></br>
                거주지
            </TitleWrapper>
        </BoxWrapper>
        </>
    );

};
export default MyInfoCard;
const BoxWrapper=styled.div`

// filter: blur(1px);
// -webkit-filter: blur(5px);

display: flex;
background-color:#175DF9;
width:333px;
height:315px;
color:white;
border-radius:10px;
`;

const TitleWrapper=styled.div`
font-size:12px;
font-weight:400;
line-height:3.4;
text-align:right;
margin-top:13px;
margin-left:15px;
`;
const NameWrapper=styled.div`
font-size:24px;
font-weight:600;
margin-top:4px;
`;
const ContentWrapper=styled.div`
font-size:16px;
font-weight:700;
line-height:2.5;
margin-left:20px;
`;
// const BtnWrapper=styled.div`
// button {
//     border: 0;
//     background-color: transparent;
    
// }
// z-index:100;
// position: absolute;
// top:100px;
// left: 49%;
// `;
// const ExWrapper=styled.div`
// color:white;
// font-size:12px;
// font-weight:400;
// z-index:100;
// position: absolute;
// top:75px;
// left: 48%;

// `;