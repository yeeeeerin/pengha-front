import React, { useState } from "react";
import styled from "styled-components";
import close from "../../static/img/close-icon.svg";
import { Redirect } from "react-router";

const SaveInfoBox = () => {

    const [isClose, setIsClose] = useState(false)

    const handleClose = () => {
        setIsClose(true)
    }

    return (
        <Wrapper>
            <img src={close} alt="" className="close" onClick={handleClose} />
            <div className="content">저장되었습니다!</div>

            {isClose && <Redirect push to={`/main`} />}
        </Wrapper>
    )
}

export default SaveInfoBox;

const Wrapper = styled.div`
        position:absolute;
    
        width:72.3%;
        height:25.8%;
    
        top:37%;
        left:13.9%;
    
        border-radius: 10px;
        box-shadow: 0 0 11px 0 #4f5053;
        background-color: #ffffff;

        z-index:100;
    
    &>.content{
            position: absolute;
            width:100%;
            bottom:29.7%;
            text-align:center;
            font-family: "OTOmniGothicM";
            font-size: 22px;
        }
    
    &>.close{
                position: absolute;
            width:24px;
            right:16px;
            top:16px;
    
        }
    
`