import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SaveHeader from "../common/SaveHeader";
import MoodPicker from "./component/MoodPicker";
import EditMoodBox from "./component/EditMoodBox";
import Shadow from "../common/Shadow";
import DatePickerView from "./component/DatePickerView";

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
            {isDatePicker && <DatePickerView datePicker={datePicker} />}
            <Shadow check={isDatePicker} />
        </Wrapper>
    )
}

export default Save;

const Wrapper = styled.div`

`

