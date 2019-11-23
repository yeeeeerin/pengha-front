import React, { useState } from "react";
import styled from "styled-components";
import Mood from "../../common/Mood";
import InputBox from "./InputBox";
import DatePicker from "./DatePicker";


const EditMoodBox = (props) => {

    const { type, datePicker, handleSetMood } = props;
    const [mood, setMood] = useState("")


    const handleSetMoodText = (text) => {
        handleSetMood(text);
        setMood(text)
    }


    return (
        <Wrapper>

            <DatePicker date={TEST_DATE} onClick={datePicker} />

            <div className="mood" >
                <Mood size="big" type={type} />
            </div>

            <InputBox
                onChange={handleSetMoodText}
                width={76.2}
                type="text"
                value={mood}
                text={"기분을 15자 이내로 입력해주세요. 펭펭"}
            />

        </Wrapper>
    )
}

export default EditMoodBox;

const TEST_DATE = "2019년 11월 23일 토"

const Wrapper = styled.div`
        position:absolute;
        top:108px;
        width:100%;
        height:83.8%;
        background-color: #f6f7fa;
    
    &>.mood{
        position: absolute;
        width:100%;
        top:15.7%;
        left:27.2%;
    }
`