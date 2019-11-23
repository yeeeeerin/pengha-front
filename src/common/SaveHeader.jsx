import React, { useState } from "react";
import styled from "styled-components";
import back from "../static/img/back-icon.svg";
import { Redirect } from "react-router";

const SaveHeader = (props) => {

    const { handleDone } = props;

    const [isOk, setIsOk] = useState(false);
    const [isBack, setIsBack] = useState(false);

    const handleOk = () => {
        handleDone();
        setIsOk(true);
    }

    const handleIsBack = () => {
        setIsBack(!isBack);
    }
    return (
        <Wrapper>

            <img className="back" src={back} alt="" onClick={handleIsBack} />

            <div className="save" onClick={handleOk}>확인</div>

            {isOk && <Redirect push to={`/main`} />}
            {isBack && <Redirect push to={`/main`} />}
        </Wrapper>

    )
}

export default SaveHeader;

const Wrapper = styled.div`
    position:fixed;
    width:100%;
    height:108px;

   
    &>.back{
        position:absolute;
        bottom:25%;
        left:7.7%;
    }

    &>.save{
        position:absolute;
        font-family:"OTOmniGothicH";
        font-weight:bold;
        font-size:18px;
        right:7.5%;
        bottom:24%;

        color:#18193f;
    }

`