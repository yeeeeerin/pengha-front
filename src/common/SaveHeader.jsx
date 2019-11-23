import React from "react";
import styled from "styled-components";
import back from "../static/img/back-icon.svg";

const SaveHeader = (props) => {
    return (
        <Wrapper>

            <img className="back" src={back} alt="" />

            <div className="save">확인</div>
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
    }

`