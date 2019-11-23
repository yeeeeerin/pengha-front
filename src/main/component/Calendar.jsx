import React from "react";
import styled from "styled-components";
import MonthTitle from "./MonthTitle";
import MoodList from "./MoodList";
import Mood from "../../common/Mood";

const Calendar = (props) => {

    const height = props.height;

    return (
        <Wrapper height={height}>
            <MonthTitle year={2019} month={11}></MonthTitle>
            <MoodList>
                <Mood size="middle" type="best" />
                <Mood size="middle" type="sad" />
                <Mood size="middle" type="best" />
                <Mood size="middle" type="best" />
            </MoodList>
        </Wrapper>
    )
}

export default Calendar;

const Wrapper = styled.div`
    position:relative;
    width:85%;
    height: ${props => `${props.height}%`};
    left:7.5%;

    margin-top:18px;
    

`