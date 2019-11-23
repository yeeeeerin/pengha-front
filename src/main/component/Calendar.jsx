import React, {useState} from "react";
import styled from "styled-components";
import MonthTitle from "./MonthTitle";
import MoodList from "./MoodList";
import Mood from "../../common/Mood";
import { Redirect } from "react-router";

const Calendar = (props) => {

    const { month } = props;
    const [isClick, setIsClick] = useState(false);
    const height = props.height;
    return (
        <Wrapper height={height}>
            <MonthTitle year={2019} month={month}></MonthTitle>
            <MoodList>
                {
                    dummy.find(m => m.year === month).data.map(m => {
                        return (<Mood size="middle" type={m} onClick={_=>{setIsClick(true)}}/>)
                    })
                }
            </MoodList>
            {
                isClick &&
                <Redirect push to="/DailyList"/>
            }
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

const dummy = [
    { year: 9, data: ["best", "best", "best", "angry", "sad", "best", "best", "flex"] },
    { year: 10, data: ["best", "good", "lonely", "embarrassed", "sad", "best", "best", "flex", "embarrassed", "sad", "flex", "best", "flex"] },
    { year: 11, data: ["best", "best", "best", "angry", "sad", "best", "best", "flex", "happy", "happy", "lonely", "lonely"] },
]