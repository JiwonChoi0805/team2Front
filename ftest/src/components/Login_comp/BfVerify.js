import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Header from "../Header";

import mainLogo from "../images_comp/mainLogo.png";
import checkedIcon from "../images_comp/checked.png";
import uncheckedIcon from "../images_comp/unchecked.png";

const BfVerify = () => {
    const navigate = useNavigate();
    const [id, setID] = useState();
    const [pw, setPW] = useState();
    const [pw_re, setPW_re] = useState();
    const [usertype, setUsertype] = useState();

    const handleChange = (e) => {
        setID(e.target.value);
    };
    const handleChange2 = (e) => {
        const value = e.target.value;
        setPW(value);
        if (value !== "") {
            setPW_re("");
        }
    };
    const handleChange3 = (e) => {
        setPW_re(e.target.value);
    };
    const handleUsertypeChange = (type) => {
        setUsertype(type);
    };
    const completeVerify = () => {
        if (usertype === "patient") {
            navigate("/afVerify");
        } else if (usertype === "doctor") {
            navigate("/verifying");
        }
    };

    return (
        <Wrapper>
            <Header title="회원가입" />
            <BfVerifyContent>
                <LogoWrapper>
                    <img src={mainLogo} />
                    <p class="title">국민들의 건강 관리 지키미, 건강지갑</p>
                </LogoWrapper>
                <InputWrapper>
                    <div class="input">사용하실 아이디를 입력해주세요.</div>
                    <input
                        type="text"
                        placeholder="아이디 입력"
                        value={id}
                        onChange={handleChange}
                    ></input>
                    <div class="input">사용하실 비밀번호를 입력해주세요.</div>
                    <input
                        type="password"
                        placeholder="비밀번호 입력"
                        value={pw}
                        onChange={handleChange2}
                    ></input>
                    <div class="pw2Container">
                        <input
                            type="password"
                            placeholder="비밀번호 재확인"
                            value={pw_re}
                            onChange={handleChange3}
                        ></input>
                        {(pw === pw_re && pw !== "" && pw_re !== "" && (
                            <img src={checkedIcon} />
                        )) ||
                            ((pw === "" || pw_re === "" || pw !== pw_re) && (
                                <img src={uncheckedIcon} />
                            ))}
                    </div>
                    <p class="userType">
                        해당하는 사용자 유형을 선택해 주세요.
                    </p>
                    <UserTypeWrapper>
                        <span
                            className={`patient ${
                                usertype === "patient" ? "#175df9" : ""
                            }`}
                            onClick={() => handleUsertypeChange("patient")}
                        >
                            일반 사용자
                        </span>
                        <span
                            className={`doctor ${
                                usertype === "doctor" ? "#10c38e" : ""
                            }`}
                            onClick={() => handleUsertypeChange("doctor")}
                        >
                            의료인 사용자
                        </span>
                    </UserTypeWrapper>
                    <button class="btn_next" onClick={completeVerify}>
                        다음으로
                    </button>
                </InputWrapper>
            </BfVerifyContent>
        </Wrapper>
    );
};

export default BfVerify;

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #202329;
    img {
        padding-top: 5%;
    }
`;
const BfVerifyContent = styled.div`
    margin-top: 80px;
    height: 100%;
    width: 85%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    .title {
        color: white;
        font-size: 13px;
    }
    img {
        width: 135px;
    }
    margin-bottom: 30px;
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .input,
    .userType {
        font-size: 10px;
        color: white;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .userType {
        margin-top: 30px;
    }
    input {
        height: 40px;
        border-style: none;
        outline: none;
        border-radius: 10px;
        padding-left: 7%;
        margin-bottom: 10px;
        font-weight: 500;
        color: black;
        &::placeholder {
            color: #aeaeae;
        }
    }
    .pw2Container {
        height: 40px;
        border-style: none;
        outline: none;
        border-radius: 10px;
        background-color: white;
        display: flex;
        padding-right: 5%;
        justify-content: space-between;
        input {
            height: 94%;
        }
        img {
            height: 20px;
            display: flex;
            align-items: center;
        }
    }
    button {
        height: 40px;
        border-style: none;
        outline: none;
        border-radius: 20px;
        background: #aeaeae;
        color: white;
        font-size: 13px;
        margin-top: 50px;
    }
    .btn_next:hover {
        background: #175df9;
    }
    .btn_next {
        margin-bottom: 10%;
    }
`;
const UserTypeWrapper = styled.div`
    display: flex;
    span {
        background: #aeaeae;
        height: 40px;
        width: 50%;
        border-style: none;
        outline: none;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .patient {
        margin-right: 8px;
    }
    .doctor {
        margin-left: 8px;
    }
    .patient:hover {
        background: #175df9;
    }
    .doctor:hover {
        background: #10c38e;
    }
`;
