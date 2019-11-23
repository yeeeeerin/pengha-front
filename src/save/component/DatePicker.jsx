import React from "react";
import styled from "styled-components";
import select from "../../static/img/select-icon.svg";

const DatePicker = (props) => {
    const { date, onClick } = props;
    return (
        <Wrapper onClick={onClick}>

            <div className="date">
                {date}
            </div>
            <img src={select} className="select" />
        </Wrapper>
    )
}

export default DatePicker;

const Wrapper = styled.div`
    position:absolute;
    width:52.3%;
    height:38px;

    left:7.5%;
    top:4.5%;

    background:#fff;

    box-shadow: 0 0 11px 0 #e4e8f9;
    border-radius: 4px;

    font-size:15px;
    text-align:center;

    display: flex;
    justify-content: center;
    align-items: center;




    &>.date{
        font-family:"OTOmniGothicH";
        color:#18193f;

    }

    &>.select{
        margin-left:10px;
    }
`