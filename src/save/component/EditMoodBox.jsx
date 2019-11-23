import React, { useState } from "react";
import styled from "styled-components";
import Mood from "../../common/Mood";
import InputBox from "./InputBox";


const EditMoodBox = (props) => {

    const { type } = props;
    const [mood, setMood] = useState("")

    const handleSetMood = (text) => {
        setMood(text);
    }



    return (
        <Wrapper>
            <div className="mood" >
                <Mood size="big" type={type} />
            </div>

            <InputBox
                onChange={handleSetMood}
                width={76.2}
                type="text"
                value={mood}
                text={"기분을 15자 이내로 입력해주세요. 펭펭"}
            />

        </Wrapper>
    )
}

export default EditMoodBox;

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