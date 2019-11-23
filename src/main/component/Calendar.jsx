import React from "react";
import styled from "styled-components";
import MonthTitle from "./MonthTitle";

const Calendar = (props) => {
    return (
        <Wrapper>
            <MonthTitle year={2019} month={11}></MonthTitle>
        </Wrapper>
    )
}

export default Calendar;

const Wrapper = styled.div`
    width:100%;
    height:80%;

    background:pink;
    margin-bottom:20px;

`