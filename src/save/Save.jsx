import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SaveHeader from "../common/SaveHeader";
import MoodPicker from "./component/MoodPicker";
import EditMoodBox from "./component/EditMoodBox";
import Shadow from "../common/Shadow";
import DatePickerView from "./component/DatePickerView";

import axios from 'axios';
import SaveInfoBox from "./component/SaveInfoBox";

const Save = (props) => {

    const [moodType, setMoodType] = useState("happy")
    const [isDatePicker, setIsDatePicker] = useState(false);
    const [mood, setMood] = useState("")
    const [isSaveInfoBox, setIsSaveInfoBox] = useState(false);

    useEffect(() => {

    }, [moodType])

    const handleMoodPicker = (type) => {
        setMoodType(type);
    }

    const handleSetMood = (text) => {
        setMood(text);
    }


    const datePicker = () => {
        setIsDatePicker(!isDatePicker);
    }

    const handleDone = async () => {
        setIsSaveInfoBox(true);
        const url = "http://13.125.144.141:8000/api/moods"
        var config = {
            headers: { 'Access-Control-Allow-Origin': '*' }
        };
        const data = {
            emoticon_type: moodType,
            title: moodType,
            desc: mood
        }
        await axios.post(url, data)
    }


    return (
        <Wrapper>
            <SaveHeader handleDone={handleDone} />

            <EditMoodBox type={moodType} datePicker={datePicker} handleSetMood={handleSetMood} />
            <MoodPicker handleMoodPicker={handleMoodPicker} />
            {isDatePicker && <DatePickerView datePicker={datePicker} />}
            <Shadow check={isDatePicker || isSaveInfoBox} />
            {isSaveInfoBox && <SaveInfoBox></SaveInfoBox>}
        </Wrapper>
    )
}

export default Save;

const Wrapper = styled.div`
    position:absolute;
    width:100%;
    height:100%;

    overflow:hidden;
`

