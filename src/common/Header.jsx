import React from "react";
import styled from "styled-components";

const Header = (props) => {
    return (
        <Wrapper>
            <div className="logo">
                펭수의 하루
            </div>
        </Wrapper>

    )
}

export default Header;

const Wrapper = styled.div`
    position:fixed;
    width:100%;
    height:11.9%;

    .logo{
        position:absolute;
        font-size:30px;
        left:7.5%;
        bottom:0;
        color:#18193f;

        font-family:"OTOmniGothicH";
    }

`