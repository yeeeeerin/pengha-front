import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SaveHeader from "../common/SaveHeader";
import MoodPicker from "./component/MoodPicker";
import EditMoodBox from "./component/EditMoodBox";

const Save = (props) => {

    const [moodType, setMoodType] = useState("happy")

    useEffect(() => {

    }, [moodType])

    const handleMoodPicker = (type) => {
        setMoodType(type);
    }

    return (
        <Wrapper>
            <SaveHeader />
            <EditMoodBox type={moodType} />
            <MoodPicker handleMoodPicker={handleMoodPicker} />
        </Wrapper>
    )
}

export default Save;

const Wrapper = styled.div`

`