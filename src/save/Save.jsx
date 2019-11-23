import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SaveHeader from "../common/SaveHeader";
import MoodPicker from "./component/MoodPicker";
import EditMoodBox from "./component/EditMoodBox";

const Save = (props) => {

    const [moodType, setMoodType] = useState("happy")
    const [isDatePicker, setIsDatePicker] = useState(false);

    useEffect(() => {

    }, [moodType])

    const handleMoodPicker = (type) => {
        setMoodType(type);
    }


    const datePicker = () => {
        setIsDatePicker(!isDatePicker);
    }


    return (
        <Wrapper>
            <SaveHeader />

            <EditMoodBox type={moodType} datePicker={datePicker} />
            <MoodPicker handleMoodPicker={handleMoodPicker} />
        </Wrapper>
    )
}

export default Save;

const Wrapper = styled.div`

`

